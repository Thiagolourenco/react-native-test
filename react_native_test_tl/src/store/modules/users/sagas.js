import {takeLatest, call, put, all} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';

import {
  usersSuccess,
  usersFailure,
  userAuthSuccess,
  userAuthFailure,
  userAuthUpdateSuccess,
  userAuthUpdateFailure,
} from './actions';
import api from '../../../services/api';

export function* userList({payload}) {
  try {
    const id = payload.id;
    const response = yield call(api.get, `users?amigoId=${id}`);

    yield put(usersSuccess(response.data));
  } catch (error) {
    showMessage({
      type: 'danger',
      message: 'Erro ao buscar amigos',
    });
    yield put(usersFailure(error));
  }
}

export function* userUpdateList({payload}) {
  try {
    const email = payload.email;
    const navigation = payload.navigation;

    const response = yield call(api.get, `users?email=${email}`);

    if (response.data.length === 0) {
      yield put(userAuthFailure());

      showMessage({
        type: 'danger',
        message: 'Email não encontrado, colocar um e-mail válido',
      });
    } else {
      yield put(userAuthSuccess(response.data[0]));
      navigation.navigate('Home');
    }
  } catch (error) {
    showMessage({
      type: 'danger',
      message: 'Email não encontrado, colocar um e-mail válido',
    });
    yield put(userAuthFailure(error));
  }
}

export function* updateUpdateData({payload}) {
  try {
    const id = payload.id;

    const data = {
      id: payload.id,
      name: payload.name,
      email: payload.email,
      description: payload.description,
      visto: payload.visto,
      status: payload.status,
    };

    const response = yield call(api.put, `users/${id}`, data);

    yield put(userAuthUpdateSuccess(response.data));
  } catch (error) {
    showMessage({
      type: 'danger',
      message: 'Error ao atualizar perfil, tente novamente',
    });
    yield put(userAuthUpdateFailure(error));
  }
}

export default all([
  takeLatest('@user/USER_REQUEST', userList),
  takeLatest('@user/USER_AUTH_REQUEST', userUpdateList),
  takeLatest('@user/USER_AUTH_UPDATE_REQUEST', updateUpdateData),
]);
