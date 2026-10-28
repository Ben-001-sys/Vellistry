import 'reflect-metadata';
import assert from 'node:assert/strict';
import {after, before, test} from 'node:test';
import {NestFactory} from '@nestjs/core';
import {ServiceUnavailableException, type INestApplication} from '@nestjs/common';
import {AppModule} from '../app.module';
import {SupabaseAuthGuard} from './supabase-auth.guard';
import {SupabaseAuthService} from './supabase-auth.service';
import {BooksService} from '../books/books.service';
import {BooksController} from '../books/books.controller';

// Real Nest module/HTTP wiring with injected synthetic SDK responses. No Auth/Data API network.
let app: INestApplication;
let auth: SupabaseAuthService;
let origin: string;
let mode: 'valid' | 'invalid' | 'unavailable' | 'data-error' = 'valid';
let verifications = 0;
let queries = 0;
const token = 'synthetic.offline.token';
const book = {id: 'synthetic-book', title: 'Synthetic title'};
before(async () => {
  app = await NestFactory.create(AppModule, {logger: false, abortOnError: false});
  auth = app.get(SupabaseAuthService);
  auth.publicClient = (() => {
    if (mode === 'unavailable') throw new ServiceUnavailableException('Supabase not configured');
    return {auth: {getUser: async (received: string) => {
      assert.equal(received, token); verifications++;
      return mode === 'invalid' ? {data: {user: null}, error: {message: 'synthetic auth rejection'}} :
        {data: {user: {id: 'synthetic-owner'}}, error: null};
    }}};
  }) as SupabaseAuthService['publicClient'];
  auth.forUser = ((received: string) => {
    assert.equal(received, token); queries++;
    const result = () => mode === 'data-error' ? {data: null, error: {message: 'PRIVATE_SYNTHETIC_DB_DETAIL'}} : {data: [book], error: null};
    return {from: (table: string) => {
      assert.equal(table, 'books');
      return {select: () => ({order: async () => result()}), insert: (payload: unknown) => {
        assert.deepEqual(payload, {title: book.title});
        return {select: () => ({single: async () => mode === 'data-error' ? result() : {data: book, error: null}})};
      }};
    }};
  }) as unknown as SupabaseAuthService['forUser'];
  app.setGlobalPrefix('v1');
  await app.listen(0, '127.0.0.1');
  origin = await app.getUrl();
});
after(async () => { await app?.close(); });
function request(path: string, method = 'GET', authorization?: string) {
  return fetch(origin + path, {method, headers: {'Content-Type': 'application/json',
    'x-user-id': 'forged-client-owner', ...(authorization ? {authorization} : {})},
    ...(method === 'POST' ? {body: JSON.stringify({title: book.title, owner_id: 'forged-client-owner'})} : {})});
}
test('Nest injects the same registered Auth service into guard and Books service and injects Books controller', () => {
  assert.equal((app.get(SupabaseAuthGuard) as unknown as {auth: unknown}).auth, auth);
  assert.equal((app.get(BooksService) as unknown as {auth: unknown}).auth, auth);
  assert.equal((app.get(BooksController) as unknown as {books: unknown}).books, app.get(BooksService));
});
test('actual health route responds without authentication', async () => {
  assert.equal((await request('/v1/health')).status, 200);
});
for (const method of ['GET', 'POST']) {
  test(`${method} books rejects missing/forged client identity without SDK or data access`, async () => {
    const calls = [verifications, queries];
    assert.equal((await request('/v1/books', method)).status, 401);
    assert.deepEqual([verifications, queries], calls);
  });
  test(`${method} books rejects malformed authorization without verification`, async () => {
    const calls = [verifications, queries];
    assert.equal((await request('/v1/books', method, 'Bearer bad token')).status, 401);
    assert.deepEqual([verifications, queries], calls);
  });
  test(`${method} books rejects failed synthetic Auth verification as401 without DB dispatch`, async () => {
    mode = 'invalid'; const calls = queries;
    assert.equal((await request('/v1/books', method, 'Bearer ' + token)).status, 401);
    assert.equal(queries, calls);
  });
  test(`${method} books reports unavailable Auth configuration as503, not undefined.verify`, async () => {
    mode = 'unavailable'; const calls = queries;
    const response = await request('/v1/books', method, 'Bearer ' + token);
    assert.equal(response.status, 503); assert.equal(queries, calls);
    assert.equal((await response.json()).message, 'Supabase not configured');
  });
  test(`${method} books reaches the controller/service with the same verified synthetic token`, async () => {
    mode = 'valid'; const calls = queries;
    const response = await request('/v1/books', method, 'Bearer ' + token);
    assert.equal(response.status, method === 'POST' ? 201 : 200);
    assert.deepEqual(await response.json(), method === 'POST' ? book : [book]);
    assert.equal(queries, calls + 1);
  });
  test(`${method} books preserves sanitized database failure semantics`, async () => {
    mode = 'data-error';
    const response = await request('/v1/books', method, 'Bearer ' + token);
    assert.equal(response.status, 500);
    const text = await response.text();
    assert.ok(text.includes(method === 'POST' ? 'Unable to create book' : 'Unable to load books'));
    assert.ok(!text.includes('PRIVATE_SYNTHETIC_DB_DETAIL'));
    assert.ok(!text.includes('TypeError'));
  });
}
