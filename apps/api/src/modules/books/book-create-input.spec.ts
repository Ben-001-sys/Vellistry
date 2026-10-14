import assert from "node:assert/strict";
import {test} from "node:test";
import { bookInsertPayload, readBookTitle } from "./book-create-input";

test("client owner_id is ignored and the insert payload is title only", () => {
  const title = readBookTitle({
    title: "  Amber notebook  ",
    owner_id: "author-b",
    id: "forged",
  });
  assert.equal(title, "Amber notebook");
  assert.ok(title);
  const payload = bookInsertPayload(title);
  assert.deepEqual(payload, { title: "Amber notebook" });
  assert.deepEqual(Object.keys(payload), ["title"]);
});

test("missing or oversized titles are rejected without a payload", () => {
  assert.equal(readBookTitle({ owner_id: "author-a" }), null);
  assert.equal(readBookTitle({ title: "   " }), null);
  assert.equal(readBookTitle({ title: "x".repeat(121) }), null);
  assert.equal(readBookTitle(["Amber notebook"]), null);
  assert.equal(readBookTitle(null), null);
});
