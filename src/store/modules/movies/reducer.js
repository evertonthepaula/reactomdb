/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  movie: null,
  loading: false,
};

export default function movies(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@movies/MOVIES_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@movies/MOVIES_LOAD_SUCCESS': {
        draft.movie = action.payload.movie;
        draft.loading = false;
        break;
      }

      case '@movies/MOVIES_LOAD_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@movies/MOVIES_SET_ACTIVE': {
        draft.movie = action.payload.movie;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
