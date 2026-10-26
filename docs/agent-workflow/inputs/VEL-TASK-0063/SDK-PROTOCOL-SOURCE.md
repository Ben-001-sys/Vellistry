# Fixed SDK endpoint source, no invocation

Auth-js2.117.3 GoTrueClient.ts SHA256 7552500e375665e28acf23fb552ccbf1ef11379afab15859b2f670f1ae9aee9f. Source inspection only. Auth operations/key/user/token methods NOT invoked. Existing SDK user/claims/JWKS path evidence in Task59; factor visibility limitations in Task62. Endpoint source may describe operations not permitted by this preparation; no authority inferred from source.

## Original lines 1227-1265
```ts
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * if (error) {
   *   console.error(error)
   *   return
   * }
   * ```
   */
  async signInWithPassword(
    credentials: SignInWithPasswordCredentials
  ): Promise<AuthTokenResponsePassword> {
    try {
      let res: AuthResponsePassword
      if ('email' in credentials) {
        const { email, password, options } = credentials
        res = await _request(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email,
            password,
            gotrue_meta_security: { captcha_token: options?.captchaToken },
          },
          xform: _sessionResponsePassword,
        })
      } else if ('phone' in credentials) {
        const { phone, password, options } = credentials
        res = await _request(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone,
            password,
            gotrue_meta_security: { captcha_token: options?.captchaToken },
          },
          xform: _sessionResponsePassword,
        })
      } else {
        throw new AuthInvalidCredentialsError(
          'You must provide either an email or phone number and a password'
```

## Original lines 5865-5910
```ts
                  webauthn: Prettify<
                    StrictOmit<MFAVerifyWebauthnParamFields['webauthn'], 'credential_response'> & {
                      credential_response: PublicKeyCredentialJSON
                    }
                  >
                }
              >,
            /*  Exclude challengeId because the backend expects snake_case, and exclude factorId since it's passed in the path params */
            'challengeId' | 'factorId'
          > & {
            challenge_id: string
          } = {
            challenge_id: params.challengeId,
            ...('webauthn' in params
              ? {
                  webauthn: {
                    ...params.webauthn,
                    credential_response:
                      params.webauthn.type === 'create'
                        ? serializeCredentialCreationResponse(
                            params.webauthn.credential_response as RegistrationCredential
                          )
                        : serializeCredentialRequestResponse(
                            params.webauthn.credential_response as AuthenticationCredential
                          ),
                  },
                }
              : { code: params.code }),
          }

          const { data, error } = await _request(
            this.fetch,
            'POST',
            `${this.url}/factors/${params.factorId}/verify`,
            {
              body,
              headers: this.headers,
              jwt: sessionData?.session?.access_token,
            }
          )
          if (error) {
            return this._returnResult({ data: null, error })
          }

          await this._saveSession({
            expires_at: Math.round(Date.now() / 1000) + data.expires_in,
```

## Original lines 5925-5975
```ts
    if (this.lock != null) {
      // TODO(v3): remove legacy lock path
      return this._acquireLock(this.lockAcquireTimeout, run)
    }
    return run()
  }

  /**
   * {@link GoTrueMFAApi#challenge}
   */
  private async _challenge(
    params: MFAChallengeTOTPParams
  ): Promise<Prettify<AuthMFAChallengeTOTPResponse>>
  private async _challenge(
    params: MFAChallengePhoneParams
  ): Promise<Prettify<AuthMFAChallengePhoneResponse>>
  private async _challenge(
    params: MFAChallengeWebauthnParams
  ): Promise<Prettify<AuthMFAChallengeWebauthnResponse>>
  private async _challenge(params: MFAChallengeParams): Promise<AuthMFAChallengeResponse> {
    const run = async (): Promise<AuthMFAChallengeResponse> => {
      try {
        return await this._useSession(async (result) => {
          const { data: sessionData, error: sessionError } = result
          if (sessionError) {
            return this._returnResult({ data: null, error: sessionError })
          }

          const response = (await _request(
            this.fetch,
            'POST',
            `${this.url}/factors/${params.factorId}/challenge`,
            {
              body: params,
              headers: this.headers,
              jwt: sessionData?.session?.access_token,
            }
          )) as
            | Exclude<AuthMFAChallengeResponse, AuthMFAChallengeWebauthnResponse>
            /** The server will send `serialized` data, so we assert the serialized response */
            | AuthMFAChallengeWebauthnServerResponse

          if (response.error) {
            return response
          }

          const { data } = response

          if (data.type !== 'webauthn') {
            return { data, error: null }
          }
```