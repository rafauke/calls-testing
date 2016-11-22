export const SIGN_OUT_START = Symbol('@@firebase/SIGN_OUT_START');

export function signOutStart() {
  return { type: SIGN_OUT_START };
}