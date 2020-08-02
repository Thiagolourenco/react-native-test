export function photosRequest(id) {
  return {
    type: '@photos/PHOTO_REQUEST',
    payload: {id},
  };
}

export function photosSuccess(data) {
  return {
    type: '@photos/PHOTO_SUCCESS',
    payload: {data},
  };
}

export function photosFailure(error) {
  return {
    type: '@photos/PHOTO_FAILURE',
    payload: {error},
  };
}
