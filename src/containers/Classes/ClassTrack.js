import React, { Component } from "react";
import { connect } from "react-redux";

class ClassTrack extends Component {
  render() {
    return (
      <div className="registry-wrapper">
    
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
  null
)(ClassTrack);
