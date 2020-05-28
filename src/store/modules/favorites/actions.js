export function favoriteAdd(movie) {
  return {
    type: '@favorites/FAVORITES_ADD',
    payload: { movie },
  };
}

export function favoritesLoadFailure() {
  return {
    type: '@favorites/FAVORITES_LOAD_FAILURE',
  };
}
