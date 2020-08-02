import {all} from 'redux-saga/effects';

import usersListSaga from './users/sagas';
import photosSaga from './photos/sagas';

export default function* rootSaga() {
  return yield all([usersListSaga, photosSaga]);
}
