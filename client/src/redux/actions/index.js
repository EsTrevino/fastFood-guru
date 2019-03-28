import API from '../../utils/API';
import jwt_decode from 'jwt-decode';
import {
  AUTH_USER,
  LOGOUT_USER,
  UPDATE_SEARCH,
  CLEAR_SEARCH,
  USER_GEOLOCATION,
  LOCATION_SELECT,
  EDIT_REVIEW,
  DELETE_REVIEW,
  CLEAR_REVIEW,
  GET_ERRORS,
  CLEAR_ERRORS
} from './types';
import setAuthToken from '../../utils/setAuthToken';
import history from '../../utils/history';

export const signInUser = state => dispatch => {
  API.login(state)
    .then(response => {
      let { data } = response;
      let token = data.token;

      localStorage.setItem('token', token);
      setAuthToken(token);
      let decodedToken = jwt_decode(token);

      dispatch({
        type: AUTH_USER,
        payload: decodedToken
      });

      dispatch({
        type: CLEAR_ERRORS
      });

      history.push('/');
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const signUpUser = state => dispatch => {
  API.register(state)
    .then(response => {
      let { data } = response;
      let token = data.token;

      localStorage.setItem('token', token);
      setAuthToken(token);
      let decodedToken = jwt_decode(token);

      dispatch({
        type: AUTH_USER,
        payload: decodedToken
      });

      history.push('/');
    })
    .catch(err => {
      console.log(err);
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('token');
  setAuthToken(false);
  dispatch({
    type: LOGOUT_USER
  });

  history.push('/');
};

export const googlePlacesSearch = searchInfo => dispatch => {
  const { geolocation } = searchInfo;
  API.googlePlaceSearch(searchInfo).then(results => {
    const realTimeData = { results: results.data.results };

    dispatch({
      type: UPDATE_SEARCH,
      payload: realTimeData
    });

    dispatch({
      type: USER_GEOLOCATION,
      payload: geolocation
    });
  });
};

export const selectLocation = location => dispatch => {
  const selectedLocation = { location: location };
  dispatch({
    type: LOCATION_SELECT,
    payload: selectedLocation
  });
};

export const createNewReview = newReviewInfo => dispatch => {
  API.newReview(newReviewInfo).then(results => {
    dispatch({
      type: CLEAR_SEARCH
    });

    history.push('/');
  });
};

export const grabReviewInfoForEdit = editReviewInfo => dispatch => {
  dispatch({
    type: EDIT_REVIEW,
    payload: editReviewInfo
  });

  history.push('/editreview');
};

export const grabReviewInfoForDelete = deleteReviewInfo => dispatch => {
  dispatch({
    type: DELETE_REVIEW,
    payload: deleteReviewInfo
  });

  history.push('/deleteReview');
};

export const clearReivewReducer = () => dispatch => {
  dispatch({
    type: CLEAR_REVIEW
  });
};

export const updateReview = updateInfo => dispatch => {
  API.updateUserReview(updateInfo).then(response => {
    dispatch({
      type: CLEAR_REVIEW
    });
    history.push('/dashboard');
  });
};

export const deleteReview = deleteInfo => dispatch => {
  API.deleteUserReview(deleteInfo).then(response => {
    dispatch({
      type: CLEAR_REVIEW
    });
    history.push('/dashboard');
  });
};
