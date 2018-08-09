import React, { Component } from "react";

class AuthContainer extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default AuthContainer;
