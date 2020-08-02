import {combineReducers} from 'redux';

import userList from './users/reducer';
import photo from './photos/reducer';

export default combineReducers({
  userList,
  photo,
});
