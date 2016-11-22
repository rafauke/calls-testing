export const SIGN_OUT_ERROR = Symbol('@@firebase/SIGN_OUT_ERROR');

export function signOutError(error) {
  return { type: SIGN_OUT_ERROR, payload: error };
}
