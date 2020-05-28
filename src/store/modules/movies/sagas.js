import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { moviesLoadSuccess, moviesLoadFailure } from './actions';
import Servicemovies from '../../../services/omdb/movies';

// eslint-disable-next-line consistent-return
export function* load({ payload }) {
  try {
    const { params } = payload;

    const response = yield call(Servicemovies.find, params);

    if (response.Response === 'False') {
      toast.info('Filme não encontrado');
      yield put(moviesLoadSuccess({ movie: null }));
      return false;
    }

    yield put(moviesLoadSuccess({ movie: response }));
  } catch (err) {
    toast.error('Falha na busca dos dados!');
    yield put(moviesLoadFailure());
  }
}

export default all([takeLatest('@movies/MOVIES_REQUEST', load)]);
