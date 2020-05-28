import { takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';

export function signIn({ payload }) {
  try {
    const { publicKey } = payload;

    localStorage.setItem('publicKey', publicKey);

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação.');
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
