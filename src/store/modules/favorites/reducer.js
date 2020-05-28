/* eslint-disable no-param-reassign */
import produce from 'immer';
import { toast } from 'react-toastify';

const INITIAL_STATE = {
  favorites: [],
};

export default function favorites(state = INITIAL_STATE, action) {
  function addFavorite(movie, st) {
    if (st.favorites.find((el) => el.id === movie.id)) {
      toast.error('Filme já adicionado aos favoritos');
      return [...st.favorites];
    }

    toast.success('Favorito adicionado com sucesso!');
    return [...st.favorites, movie];
  }

  return produce(state, (draft) => {
    switch (action.type) {
      case '@favorites/FAVORITES_ADD': {
        const { movie } = action.payload;

        const newMovie = {
          id: `${movie.Title}-${movie.Year}`,
          ...movie,
        };

        draft.favorites = addFavorite(newMovie, state);
        break;
      }

      case '@favorites/FAVORITES_LOAD_FAILURE': {
        draft.favorites = [null];
        break;
      }

      default:
    }
  });
}
