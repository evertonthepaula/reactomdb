export function moviesRequest(params = {}) {
  return {
    type: '@movies/MOVIES_REQUEST',
    payload: { params },
  };
}

export function moviesLoadSuccess({ movie }) {
  return {
    type: '@movies/MOVIES_LOAD_SUCCESS',
    payload: { movie },
  };
}

export function moviesLoadFailure() {
  return {
    type: '@movies/MOVIES_LOAD_FAILURE',
  };
}

export function moviesSetActive(movie) {
  return {
    type: '@movies/MOVIES_SET_ACTIVE',
    payload: { movie },
  };
}
