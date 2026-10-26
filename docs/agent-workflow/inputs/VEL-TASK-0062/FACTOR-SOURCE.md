# Frozen factor-state evidence, source inspection only

GoTrueClient.ts auth-js2.117.3 SHA256 7552500e375665e28acf23fb552ccbf1ef11379afab15859b2f670f1ae9aee9f. Original lines6048-6170; no SDK method, user/session/JWT or hosted endpoint accessed.

```ts
   * {@link GoTrueMFAApi#listFactors}
   */
  private async _listFactors(): Promise<AuthMFAListFactorsResponse> {
    const {
      data: { user },
      error: userError,
    } = await this.getUser()
    if (userError) {
      return { data: null, error: userError }
    }

    const data: AuthMFAListFactorsResponse['data'] = {
      all: [],
      phone: [],
      totp: [],
      webauthn: [],
      recovery_code: [],
    }

    // loop over the factors ONCE
    for (const factor of user?.factors ?? []) {
      data.all.push(factor)
      // Types that are not recognized are pushed to `all` bucket.
      if (
        factor.status === 'verified' &&
        factor.factor_type in data &&
        Array.isArray(data[factor.factor_type])
      ) {
        ;(data[factor.factor_type] as (typeof factor)[]).push(factor)
      }
    }

    return {
      data,
      error: null,
    }
  }

  /**
   * {@link GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  private async _getAuthenticatorAssuranceLevel(
    jwt?: string
  ): Promise<AuthMFAGetAuthenticatorAssuranceLevelResponse> {
    if (jwt) {
      try {
        const { payload } = decodeJWT(jwt)

        let currentLevel: AuthenticatorAssuranceLevels | null = null
        if (payload.aal) {
          currentLevel = payload.aal
        }

        let nextLevel: AuthenticatorAssuranceLevels | null = currentLevel

        const {
          data: { user },
          error: userError,
        } = await this.getUser(jwt)

        if (userError) {
          return this._returnResult({ data: null, error: userError })
        }

        const verifiedFactors =
          user?.factors?.filter((factor: Factor) => factor.status === 'verified') ?? []

        if (verifiedFactors.length > 0) {
          nextLevel = 'aal2'
        }

        const currentAuthenticationMethods = payload.amr || []

        return { data: { currentLevel, nextLevel, currentAuthenticationMethods }, error: null }
      } catch (error) {
        if (isAuthError(error)) {
          return this._returnResult({ data: null, error })
        }
        throw error
      }
    }

    const {
      data: { session },
      error: sessionError,
    } = await this.getSession()

    if (sessionError) {
      return this._returnResult({ data: null, error: sessionError })
    }
    if (!session) {
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null,
      }
    }

    const { payload } = decodeJWT(session.access_token)

    let currentLevel: AuthenticatorAssuranceLevels | null = null

    if (payload.aal) {
      currentLevel = payload.aal
    }

    let nextLevel: AuthenticatorAssuranceLevels | null = currentLevel

    const verifiedFactors =
      session.user.factors?.filter((factor: Factor) => factor.status === 'verified') ?? []

    if (verifiedFactors.length > 0) {
      nextLevel = 'aal2'
    }

    const currentAuthenticationMethods = payload.amr || []

    return { data: { currentLevel, nextLevel, currentAuthenticationMethods }, error: null }
  }

  /**
   * {@link AuthMFARecoveryCodesApi#getStatus}
   */
  private async _getRecoveryCodesStatus(): Promise<AuthMFARecoveryCodesStatusResponse> {
```

Public documentation https://supabase.com/docs/guides/auth/auth-mfa read2026-10-25: describes AAL as assurance of a session and opt-in enforcement for enrolled users. Factor availability in project settings is not evidence of enrollment for an individual. Documentation behavior is not target acceptance. SDK paths and assumptions must be checked against exact target/schema before use.
