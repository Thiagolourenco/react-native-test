import {all, call, put, takeLatest} from 'redux-saga/effects';

import {photosSuccess, photosFailure} from './actions';
import api from '../../../services/api';
import {showMessage} from 'react-native-flash-message';

export function* photoList({payload}) {
  try {
    const id = payload.id;

    const response = yield call(api.get, `photos?userId=${id}`);

    yield put(photosSuccess(response.data));
  } catch (error) {
    showMessage({
      type: 'danger',
      message: 'Erro ao carregar a galeria',
    });

    yield put(photosFailure(error));
  }
}

export default all([takeLatest('@photos/PHOTO_REQUEST', photoList)]);
