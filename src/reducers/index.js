import {
  combineReducers
} from "redux";
import AuthReducer from "./reducerAuth";
import RegistryReducer from "./reducerRegistry";


const rootReducer = combineReducers({
  auth: AuthReducer,
  registry: RegistryReducer,
});

export default rootReducer;