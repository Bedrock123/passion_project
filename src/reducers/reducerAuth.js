import * as types from '../actions/types';

const INITIAL_STATE = {
    logged_in_user: null
};
  
  export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
    case types.FETCH_LOGGED_IN_USER_SUCCESS:
      return {...state, logged_in_user: action.payload}
    default:
      return state;
    }
  }
  