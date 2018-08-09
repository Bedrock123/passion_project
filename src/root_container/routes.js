import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../history";
import Login from "../containers/Auth/Login";
import Registry from "../containers/Classes/Registry";
import TabBar from "../components/navigation/TabBar";
import SearchBar from "../components/navigation/SearchBar";

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="global-wrapper">
          <SearchBar />
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/registry" component={Registry} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
          <TabBar />
        </div>
      </Router>
    );
  }
}

export default Routes;
