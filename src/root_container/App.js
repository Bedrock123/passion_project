import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import Routes from "./routes";

import "../assets/css/normalize.css"
import "../assets/css/style.css"
import "../assets/css/ant-design-overrides.css"

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Routes />
      </Provider>
    );
  }
}
export default App;
