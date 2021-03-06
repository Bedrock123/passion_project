import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import history from "../history";
import Registry from "../containers/Classes/Registry";
import ClassTrack from "../containers/Classes/ClassTrack";
import MySchedule from "../containers/Classes/MySchedule";
import TabBar from "../components/navigation/TabBar";
import { ConnectedRouter } from "connected-react-router";

class Routes extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="global-wrapper">
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/" component={Registry} />
              <Route exact path="/class-track" component={ClassTrack} />
              <Route exact path="/my-schedule" component={MySchedule} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
          <TabBar />
        </div>
      </ConnectedRouter>
    );
  }
}

export default Routes;
