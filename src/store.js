import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import { connectRouter, routerMiddleware } from "connected-react-router";
import history from "./history";
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet
};
var composeEnhancers;
// If ENV not in dev, do not allow REDUX Dev Tools
if (process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(
  connectRouter(history)(persistedReducer),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);
let persistor = persistStore(store);

export { store };
export { persistor };
