import { combineReducers } from 'redux';
import { routerReducer as routing} from 'react-router-redux';
import { reducer as form } from 'redux-form';

import api from 'modules/api/reducers';
import home from 'modules/home/reducers';
import online from 'modules/online/reducers';

export default combineReducers({
  api,
  home,
  online,
  routing,
  form,
});
