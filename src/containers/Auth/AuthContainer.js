import React, { Component } from "react";
import { Card } from "antd";

class AuthContainer extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <Card style={{ width: 300 }}>{this.props.children}</Card>
      </div>
    );
  }
}

export default AuthContainer;
