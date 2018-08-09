import React, { Component } from "react";
import { WingBlank } from 'antd-mobile';

class AuthContainer extends Component {
  render() {
    return (
      <WingBlank> 
        {this.props.children}
      </WingBlank>
    );
  }
}

export default AuthContainer;
