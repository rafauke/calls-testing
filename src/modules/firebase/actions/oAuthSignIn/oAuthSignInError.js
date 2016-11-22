export const OAUTH_SIGN_IN_ERROR = Symbol('@@firebase/OAUTH_SIGN_IN_ERROR');

export function oAuthSignInError(error) {
  return {
    type: OAUTH_SIGN_IN_ERROR,
    payload: error,
  };
}
