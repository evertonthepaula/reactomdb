import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'reactomdb',
      storage,
      whitelist: ['auth', 'movies', 'favorites'],
    },
    reducers
  );

  return persistedReducer;
};
