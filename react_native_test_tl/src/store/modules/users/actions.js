// LISTA DE AMIGOS

export function usersRequest(id) {
  return {
    type: '@user/USER_REQUEST',
    payload: {id},
  };
}

export function usersSuccess(data) {
  return {
    type: '@user/USER_SUCCESS',
    payload: {data},
  };
}

export function usersFailure(error) {
  return {
    type: '@user/USER_FAILURE',
    payload: {error},
  };
}

// AUTH
export function userAuthRequest(email, navigation) {
  return {
    type: '@user/USER_AUTH_REQUEST',
    payload: {email, navigation},
  };
}

export function userAuthSuccess(data) {
  return {
    type: '@user/USER_AUTH_SUCCESS',
    payload: {data},
  };
}

export function userAuthFailure() {
  return {
    type: '@user/USER_AUTH_FAILURE',
  };
}

// UPDATE
export function userAuthUpdateRequest(
  id,
  name,
  email,
  avatar,
  description,
  visto,
  status,
) {
  return {
    type: '@user/USER_AUTH_UPDATE_REQUEST',
    payload: {id, name, email, avatar, description, visto, status},
  };
}

export function userAuthUpdateSuccess(data) {
  return {
    type: '@user/USER_AUTH_UPDATE_SUCCESS',
    payload: {data},
  };
}

export function userAuthUpdateFailure(error) {
  return {
    type: '@user/USER_AUTH_UPDATE_FAILURE',
    payload: {error},
  };
}
