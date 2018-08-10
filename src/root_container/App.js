import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import Routes from "./routes";
import { PersistGate } from "redux-persist/integration/react";
import OnlineOfflineWrapper from "../containers/System/OnlineOfflineWrapper";

import "../assets/css/normalize.css";
import "../assets/css/style.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <OnlineOfflineWrapper>
            <Routes />
          </OnlineOfflineWrapper>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
