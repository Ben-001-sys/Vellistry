# Frozen SDK boundary source evidence

FACT: lock resolves supabase-js/auth-js2.117.3. Read source only, no SDK/client invocation or token/JWT experiment. GoTrueClient.ts SHA256 7552500e375665e28acf23fb552ccbf1ef11379afab15859b2f670f1ae9aee9f, lib/helpers.ts SHA256 82025113a07125f319380ec5a510e58544a04f6e3bcf82c6eb8ce3a2cc6b07c5.

## getUser explicit-token path, original lines3223-3291

```ts
  async getUser(jwt?: string): Promise<UserResponse> {
    if (jwt) {
      return await this._getUser(jwt)
    }

    await this.initializePromise

    let result: UserResponse
    if (this.lock != null) {
      // TODO(v3): remove legacy lock path
      result = await this._acquireLock(this.lockAcquireTimeout, async () => {
        return await this._getUser()
      })
    } else {
      result = await this._getUser()
    }

    if (result.data.user) {
      this.suppressGetSessionWarning = true
    }

    return result
  }

  private async _getUser(jwt?: string): Promise<UserResponse> {
    try {
      if (jwt) {
        return await _request(this.fetch, 'GET', `${this.url}/user`, {
          headers: this.headers,
          jwt: jwt,
          xform: _userResponse,
        })
      }

      return await this._useSession(async (result) => {
        const { data, error } = result
        if (error) {
          throw error
        }

        // returns an error if there is no access_token or custom authorization header
        if (!data.session?.access_token && !this.hasCustomAuthorizationHeader) {
          return { data: { user: null }, error: new AuthSessionMissingError() }
        }

        return await _request(this.fetch, 'GET', `${this.url}/user`, {
          headers: this.headers,
          jwt: data.session?.access_token ?? undefined,
          xform: _userResponse,
        })
      })
    } catch (error) {
      if (isAuthError(error)) {
        if (isAuthSessionMissingError(error)) {
          // JWT contains a `session_id` which does not correspond to an active
          // session in the database, indicating the user is signed out.

          await this._removeSession()
        }

        return this._returnResult({ data: { user: null }, error })
      }

      throw error
    }
  }

  /**
   * Updates user data for a logged in user.
```

## JWK lookup/cache, original lines6587-6648

```ts
  private async fetchJwk(kid: string, jwks: { keys: JWK[] } = { keys: [] }): Promise<JWK | null> {
    // try fetching from the supplied jwks
    let jwk = jwks.keys.find((key) => key.kid === kid)
    if (jwk) {
      return jwk
    }

    const now = Date.now()

    // try fetching from cache
    jwk = this.jwks.keys.find((key) => key.kid === kid)

    // jwk exists and jwks isn't stale
    if (jwk && this.jwks_cached_at + JWKS_TTL > now) {
      return jwk
    }
    // jwk isn't cached in memory so we need to fetch it from the well-known endpoint
    const { data, error } = await _request(this.fetch, 'GET', `${this.url}/.well-known/jwks.json`, {
      headers: this.headers,
    })
    if (error) {
      throw error
    }
    if (!data.keys || data.keys.length === 0) {
      return null
    }

    this.jwks = data
    this.jwks_cached_at = now

    // Find the signing key
    jwk = data.keys.find((key: any) => key.kid === kid)
    if (!jwk) {
      return null
    }
    return jwk
  }

  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link GoTrueClient.getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to
   * {@link GoTrueClient.getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link GoTrueClient.getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   *
   * @category Auth
   *
   * @remarks
   * - Parses the user's [access token](/docs/guides/auth/sessions#access-token-jwt-claims) as a [JSON Web Token (JWT)](/docs/guides/auth/jwts) and returns its components if valid and not expired.
   * - If your project is using asymmetric JWT signing keys, then the verification is done locally usually without a network request using the [WebCrypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).
   * - A network request is sent to your project's JWT signing key discovery endpoint `https://project-id.supabase.co/auth/v1/.well-known/jwks.json`, which is cached locally. If your environment is ephemeral, such as a Lambda function that is destroyed after every request, a network request will be sent for each new invocation. Supabase provides a network-edge cache providing fast responses for these situations.
   * - If the user's access token is about to expire when calling this function, the user's session will first be refreshed before validating the JWT.
   * - If your project is using a symmetric secret to sign the JWT, it always sends a request similar to `getUser()` to validate the JWT at the server before returning the decoded token. This is also used if the WebCrypto API is not available in the environment. Make sure you polyfill it in such situations.
```

## getClaims verification paths, original lines6690-6802

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
        publicKey,
        signature,
        stringToUint8Array(`${rawHeader}.${rawPayload}`)
      )

      if (!isValid) {
        throw new AuthInvalidJwtError('Invalid JWT signature')
      }

      // If verification succeeds, decode and return claims
      return {
        data: {
          claims: payload,
          header,
          signature,
        },
        error: null,
      }
    } catch (error) {
      if (isAuthError(error)) {
        return this._returnResult({ data: null, error })
      }
      throw error
    }
  }

  // --- Passkey Methods ---

  /**
```

## validateExp, original helper lines534-551

```ts
export function validateExp(exp: number) {
  if (!exp) {
    throw new Error('Missing exp claim')
  }
  const timeNow = Math.floor(Date.now() / 1000)
  if (exp <= timeNow) {
    throw new Error('JWT has expired')
  }
}

export function getAlgorithm(
  alg: 'HS256' | 'RS256' | 'ES256' | (string & {})
): RsaHashedImportParams | EcKeyImportParams {
  switch (alg) {
    case 'RS256':
      return {
        name: 'RSASSA-PKCS1-v1_5',
        hash: { name: 'SHA-256' },
```

INTERPRETATION: getClaims has local signature and Auth-server fallback paths, neither establishes atomic writable-session authorization. In this method body there is no explicit issuer/audience/nbf check; application policy must not infer those from a successful call. SDK handling of a server SessionMissing error is not an observation of current target logout behavior.
