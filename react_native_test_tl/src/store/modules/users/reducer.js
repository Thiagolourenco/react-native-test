import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  usersList: [],
  user: null,
};

export default function ArticleList(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@user/USER_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/USER_SUCCESS': {
        draft.usersList = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@user/USER_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@user/USER_AUTH_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/USER_AUTH_SUCCESS': {
        draft.user = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@user/USER_AUTH_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@user/USER_AUTH_UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/USER_AUTH_UPDATE_SUCCESS': {
        draft.user = action.payload.data;
        draft.loading = false;
        break;
      }

      case '@user/USER_AUTH_UPDATE_FAILURE': {
        draft.loading = true;
        break;
      }

      default:
        break;
    }
  });
}
