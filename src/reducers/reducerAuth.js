import * as types from '../actions/types';

const INITIAL_STATE = {
    logged_in_user: null,
    order_history: null,
    product_inventory: null
};
  
  export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
    case types.FETCH_LOGGED_IN_USER_SUCCESS:
      return {...state, logged_in_user: action.payload}
    case types.FETCH_LOGGED_IN_USER_ORDER_HISTORY_SUCCESS:
      return {...state, order_history: action.payload}
    case types.FETCH_PRODUCT_INVENTORY:
      return {...state, product_inventory: action.payload}
    default:
      return state;
    }
  }
  