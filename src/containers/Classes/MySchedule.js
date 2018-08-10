import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLoggedInUserData } from "../../actions/actionsAuth";

class MySchedule extends Component {
  componentWillMount() {
    this.props.fetchLoggedInUserData();
  }
  render() {
    return (
      <div className="registry-wrapper">
        <h2>My Schedule</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.auth.logged_in_user
  };
}

export default connect(
  mapStateToProps,
  { fetchLoggedInUserData }
)(MySchedule);
