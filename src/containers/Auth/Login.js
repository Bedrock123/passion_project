import React, { Component } from "react";
import { Button } from "antd";
import Logo from "../../assets/images/logo.svg";

class Login extends Component {
  render() {
    return (
      <div>
        <img src={Logo} alt="Intellgent Class Logo" />
        <h1>Log In</h1>
        <h2>Log In</h2>
        <h3>Log In</h3>
        <h4>Log In</h4>
        <h5>Log In</h5>
        <h6>Log In</h6>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur
          purus sit amet fermentum. Sed posuere consectetur est at lobortis. Sed
          posuere consectetur est at lobortis.
        </p>
        <Button size={"large"} type="primary">
          Log In
        </Button>
      </div>
    );
  }
}

export default Login;
