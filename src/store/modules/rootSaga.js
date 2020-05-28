import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import movies from './movies/sagas';

export default function* rootSaga() {
  yield all([auth, movies]);
}
