import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import searchReducer from './searchReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
  auth: authReducer,
  review: reviewReducer,
  error: errorReducer,
  search: searchReducer
});
