import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createEncryptor from "redux-persist-transform-encrypt";
import { connectRouter, routerMiddleware } from "connected-react-router";

import history from "./history";

const encryptor = createEncryptor({
  secretKey: "sp=52dc+-h^r$vp8yqy#r$u187w$#pg=t3=@a2(*!8i_xna_6n",
  onError: function(error) {
    alert(error);
  }
});

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
  transforms: [encryptor]
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
