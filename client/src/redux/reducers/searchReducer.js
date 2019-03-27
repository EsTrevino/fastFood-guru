import { UPDATE_SEARCH, CLEAR_SEARCH, LOCATION_SELECT } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return { ...state, ...action.payload };
    case CLEAR_SEARCH:
      return { ...state, ...initialState };
    case LOCATION_SELECT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
