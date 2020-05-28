export function signInRequest(publicKey) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { publicKey },
  };
}

export function signInSuccess(publicKey) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { publicKey },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
