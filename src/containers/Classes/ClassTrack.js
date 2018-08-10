import React, { Component } from "react";
import { connect } from "react-redux";

class ClassTrack extends Component {
  render() {
    return (
      <div className="registry-wrapper">
        <h2>Class Track</h2>
        {this.props.loggedInUser ? (
          <h3 className="page-subheader">{this.props.loggedInUser.user}</h3>
        ) : null}
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
