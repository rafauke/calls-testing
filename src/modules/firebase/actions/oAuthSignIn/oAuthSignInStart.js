export const OAUTH_SIGN_IN_START = Symbol('@@firebase/OAUTH_SIGN_IN_START');

export function oAuthSignInStart(user) {
  return {
    type: OAUTH_SIGN_IN_START,
    payload: user,
  };
}
