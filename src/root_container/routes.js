import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";
import history from "../history";
import Registry from "../containers/Classes/Registry";
import ClassTrack from "../containers/Classes/ClassTrack";
import MySchedule from "../containers/Classes/MySchedule";
import TabBar from "../components/navigation/TabBar";

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};
class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="global-wrapper">
          <div className="content-wrapper">
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}
              className="route-wrapper"
            >
              <Route exact path="/" component={Registry} />
              <Route exact path="/class-track" component={ClassTrack} />
              <Route exact path="/my-schedule" component={MySchedule} />
              <Redirect from="*" to="/" />
            </AnimatedSwitch>
          </div>
          <TabBar />
        </div>
      </Router>
    );
  }
}

export default Routes;
