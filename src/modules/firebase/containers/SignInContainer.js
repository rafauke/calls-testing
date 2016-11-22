import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  signInWithGithub,
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
} from 'modules/firebase/actions';

const SignIn = ({signInWithGithub, signInWithGoogle, signInWithTwitter, signInWithFacebook}) => (
  <div className="g-col">
    <h1 className="sign-in__heading">
      <FormattedMessage
        id={'firebase.signin'}
        description={'Sign in with'}
        defaultMessage={'Sign in with'}
      />
    </h1>
    <button
      className={'pt-button pt-icon-google'}
      onClick={signInWithGoogle}
    >
      Google
    </button>
    <button
      className={'pt-button pt-icon-facebook'}
      onClick={signInWithFacebook}
    >
      Facebook
    </button>
    <button
      className={'pt-button pt-icon-twitter'}
      onClick={signInWithTwitter}
    >
      Twitter
    </button>
    <button
      className={'pt-button'}
      onClick={signInWithGithub}
    >
      GitHub
    </button>
  </div>
);

SignIn.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired,
  signInWithFacebook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGithub: () => dispatch(signInWithGithub()),
  signInWithGoogle: () => dispatch(signInWithGoogle()),
  signInWithFacebook: () => dispatch(signInWithFacebook()),
  signInWithTwitter: () => dispatch(signInWithTwitter()),
});

export default connect(null, mapDispatchToProps)(SignIn);
