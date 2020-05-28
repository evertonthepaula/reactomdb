import { combineReducers } from 'redux';

import auth from './auth/reducer';
import movies from './movies/reducer';
import favorites from './favorites/reducer';

export default combineReducers({
  auth,
  movies,
  favorites,
});
