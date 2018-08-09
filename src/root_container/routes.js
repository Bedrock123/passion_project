import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../history";
import Login from "../containers/Auth/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
            <Route exact path="/" component={Login} />
            <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
