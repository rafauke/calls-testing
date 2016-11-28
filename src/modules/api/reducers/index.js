import { combineReducers } from 'redux';
import postsList from './postsList';
import itemsPerPage from './itemsPerPage';

export default combineReducers({
  postsList,
  itemsPerPage,
});
