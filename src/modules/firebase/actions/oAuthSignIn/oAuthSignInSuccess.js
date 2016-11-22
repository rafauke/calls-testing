export const OAUTH_SIGN_IN_SUCCESS = Symbol('@@auth/OAUTH_SIGN_IN_SUCCESS');

export function oAuthSignInSuccess(result) {
  return {
    type: OAUTH_SIGN_IN_SUCCESS,
    payload: result.user,
  };
}
