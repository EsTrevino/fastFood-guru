import { AUTH_USER } from '../redux/actions/types';
import store from '../redux/store';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

const checkForToken = localStorage => {
  if (localStorage.token) {
    let token = localStorage.getItem('token');
    setAuthToken(token);
    let decodedToken = jwt_decode(token);
    store.dispatch({
      type: AUTH_USER,
      payload: decodedToken
    });
  }
};

export default checkForToken;
