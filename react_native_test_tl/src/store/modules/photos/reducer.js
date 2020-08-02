import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  photoList: [],
};

export default function ArticleList(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@photos/PHOTO_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@photos/PHOTO_SUCCESS': {
        draft.photoList = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@photos/PHOTO_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        break;
    }
  });
}
