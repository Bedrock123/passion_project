import React, { Component } from "react";
import { Button } from "antd";
import Logo from "../../assets/images/logo.svg";

class Login extends Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="Intellgent Class Logo" />
        <Button size={"large"} type="primary">
          Button
        </Button>
      </div>
    );
  }
}

export default Login;
