import { combineReducers } from "redux";
import AuthReducer from "./reducerAuth";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;
