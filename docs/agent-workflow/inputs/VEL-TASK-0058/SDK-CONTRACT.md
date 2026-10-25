# Frozen SDK response-shape source

FACT: repository lock resolves supabase-js/auth-js2.117.3; inspected installed frozen SDK source only, no client invocation. GoTrueClient.ts SHA256 7552500e375665e28acf23fb552ccbf1ef11379afab15859b2f670f1ae9aee9f. Exact relevant source excerpts below, with original one-based line ranges; injected mocks only in this Task. No SDK implementation copied or imported at runtime.

Public references inspected2026-10-25: https://supabase.com/docs/reference/javascript/auth-getuser , https://supabase.com/docs/reference/javascript/auth-getclaims , https://supabase.com/changelog . Markdown changelog endpoint could not be parsed by web tool; HTML fallback used. These public docs are not target observations or permission to use real Auth.

## getUser3223-3231

```ts
  async getUser(jwt?: string): Promise<UserResponse> {
    if (jwt) {
      return await this._getUser(jwt)
    }

    await this.initializePromise

    let result: UserResponse
    if (this.lock != null) {
```

## getClaims6690-6773

```ts
  async getClaims(
    jwt?: string,
    options: {
      /**
       * @deprecated Please use options.jwks instead.
       */
      keys?: JWK[]

      /** If set to `true` the `exp` claim will not be validated against the current time. */
      allowExpired?: boolean

      /** If set, this JSON Web Key Set is going to have precedence over the cached value available on the server. */
      jwks?: { keys: JWK[] }
    } = {}
  ): Promise<
    | {
        data: { claims: JwtPayload; header: JwtHeader; signature: Uint8Array }
        error: null
      }
    | { data: null; error: AuthError }
    | { data: null; error: null }
  > {
    try {
      let token = jwt
      if (!token) {
        const { data, error } = await this.getSession()
        if (error || !data.session) {
          return this._returnResult({ data: null, error })
        }
        token = data.session.access_token
      }

      const {
        header,
        payload,
        signature,
        raw: { header: rawHeader, payload: rawPayload },
      } = decodeJWT(token)

      if (!options?.allowExpired) {
        // Reject expired JWTs should only happen if jwt argument was passed.
        // Rethrow as AuthInvalidJwtError so the outer catch converts it to { data, error }.
        try {
          validateExp(payload.exp)
        } catch (e) {
          throw new AuthInvalidJwtError(e instanceof Error ? e.message : 'JWT validation failed')
        }
      }

      const signingKey =
        !header.alg ||
        header.alg.startsWith('HS') ||
        !header.kid ||
        !('crypto' in globalThis && 'subtle' in globalThis.crypto)
          ? null
          : await this.fetchJwk(header.kid, options?.keys ? { keys: options.keys } : options?.jwks)

      // If symmetric algorithm or WebCrypto API is unavailable, fallback to getUser()
      if (!signingKey) {
        const { error } = await this.getUser(token)
        if (error) {
          throw error
        }
        // getUser succeeds so the claims in the JWT can be trusted
        return {
          data: {
            claims: payload,
            header,
            signature,
          },
          error: null,
        }
      }

      const algorithm = getAlgorithm(header.alg)

      // Convert JWK to CryptoKey
      const publicKey = await crypto.subtle.importKey('jwk', signingKey, algorithm, true, [
        'verify',
      ])

      // Verify the signature
      const isValid = await crypto.subtle.verify(
        algorithm,
```

INTERPRETATION: getUser returns data.user and error; getClaims returns data.claims and error, with optional metadata. Mock composition must pass explicit same token to both, require null error and complete valid user/claims, never omit token/getSession or pass allowExpired/JWKS overrides. Actual getClaims may use cached JWKS or getUser fallback; none of that is executed/tested by this mock experiment. Signature/revocation/active-session/production decisions remain pending.
