import Lockr from 'lockr';
import { SET_ITEMS_PER_PAGE } from 'modules/api/actions';

const initState = Lockr.get('postsPerPage') || '5';

export default (state = initState, action) => {
  switch (action.type) {
    case SET_ITEMS_PER_PAGE:
      return action.amount;
    default:
      return state;
  }
};
