import firebase from 'firebase';
import { firebaseAuth } from 'modules/firebase/utils';

import { oAuthSignInStart } from './oAuthSignInStart';
import { oAuthSignInSuccess } from './oAuthSignInSuccess';
import { oAuthSignInError } from './oAuthSignInError';

function authenticate(provider) {
  return dispatch => {
    dispatch(oAuthSignInStart());
    firebaseAuth.signInWithPopup(provider)
      .then(result => dispatch(oAuthSignInSuccess(result)))
      .catch(error => dispatch(oAuthSignInError(error)));
  };
}

export function signInWithGithub() {
  return authenticate(new firebase.auth.GithubAuthProvider());
}

export function signInWithGoogle() {
  return authenticate(new firebase.auth.GoogleAuthProvider());
}

export function signInWithFacebook() {
  return authenticate(new firebase.auth.FacebookAuthProvider());
}

export function signInWithTwitter() {
  return authenticate(new firebase.auth.TwitterAuthProvider());
}
