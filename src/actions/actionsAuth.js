import * as types from "./types";


// Retrives Logged In User Information Upon Initial APplication Load
export function loggedInUserSuccess(json) {
    return {
        type: types.FETCH_LOGGED_IN_USER_SUCCESS,
        payload: json
    };
}

// Retrives Logged In User Information Upon Initial APplication Load
export function fetchLoggedInUserData() {
    return function (dispatch) {
        dispatch(loggedInUserSuccess({
            user: ['Hello', 'Doofbye']
        }));
    };
}