/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  publicKey: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.signed = true;
        draft.publicKey = action.payload.publicKey;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.publicKey = action.payload.publicKey;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.signed = false;
        draft.publicKey = null;
        break;
      }

      default:
    }
  });
}
