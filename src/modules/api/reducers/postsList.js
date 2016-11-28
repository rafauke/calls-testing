import Lockr from 'lockr';
import {
  GET_POSTS_DATA,
  GET_POSTS_DATA_SUCCESS,
  GET_POSTS_DATA_ERROR,
  PUSH_POST,
  ADD_POST,
} from 'modules/api/actions';

const initState = {
  isLoading: false,
  data: Lockr.get('postsList') || [],
  error: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS_DATA_ERROR:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: true });
    case GET_POSTS_DATA_SUCCESS:
      return Object.assign({}, state, { isLoading: false, data: action.data, error: false });
    case GET_POSTS_DATA:
      return Object.assign({}, state, { isLoading: true, error: false });
    case PUSH_POST:
      const { id, post_title, user_name, views, likes, created_at } = action;
      return Object.assign({}, state, {
        data: [{
          id,
          post_title,
          user_name,
          views,
          likes,
          created_at,
        }, ...state.data],
      });
    case ADD_POST:
      return state;
    default:
      return state;
  }
};
