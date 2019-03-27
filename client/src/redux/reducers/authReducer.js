import { AUTH_USER, LOGOUT_USER, USER_GEOLOCATION } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, isAuthenticated: true, user: action.payload };
    case LOGOUT_USER:
      return { ...state, ...initialState };
    case USER_GEOLOCATION:
      return { ...state, userGeo: action.payload };
    default:
      return state;
  }
}
