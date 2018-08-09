import React, { Component } from "react";
import { WingBlank } from 'antd-mobile';

class AuthContainer extends Component {
  render() {
    return (
      <div> 
        {this.props.children}
      </div>
    );
  }
}

export default AuthContainer;
