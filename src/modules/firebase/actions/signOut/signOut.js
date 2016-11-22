import { firebaseAuth } from 'modules/firebase/utils';

import { signOutStart } from './signOutStart';
import { signOutSuccess } from './signOutSuccess';
import { signOutError } from './signOutError';

export function signOut() {
  return dispatch => {
    dispatch(signOutStart());
    firebaseAuth.signOut()
      .then(result => dispatch(signOutSuccess(result)))
      .catch(error => {
        dispatch(signOutError(error));
        throw error;
      });
  };
}
