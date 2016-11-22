export const SIGN_OUT_SUCCESS = Symbol('@@firebase/SIGN_OUT_SUCCESS');

export function signOutSuccess(result) {
  return { type: SIGN_OUT_SUCCESS, payload: result };
}
