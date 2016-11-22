import { combineReducers } from 'redux';
import { routerReducer as routing} from 'react-router-redux';

import api from 'modules/api/reducers';
import firebase from 'modules/firebase/reducers';
import home from 'modules/home/reducers';
import i18n from 'modules/i18n/reducers';
import online from 'modules/online/reducers';

export default combineReducers({
  api,
  firebase,
  home,
  i18n,
  online,
  routing,
});
