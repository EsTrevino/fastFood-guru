import { EDIT_REVIEW, DELETE_REVIEW, CLEAR_REVIEW } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_REVIEW:
      return { ...state, ...action.payload };
    case DELETE_REVIEW:
      return { ...state, ...action.payload };
    case CLEAR_REVIEW:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
