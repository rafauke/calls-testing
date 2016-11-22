import {
  OAUTH_SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
} from 'modules/firebase/actions';

const initialState = {
  authenticated: false,
  id: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OAUTH_SIGN_IN_SUCCESS:
      return Object.assign(state, {
        authenticated: !!action.payload,
        id: action.payload ? action.payload.uid : null,
      });
    case SIGN_OUT_SUCCESS:
      return Object.assign({}, {
        authenticated: false,
        id: null,
      });
    default:
      return state;
  }
};
