import React, { Component } from "react";

class OnlineOfflineWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { online: true };
  }
  componentDidMount() {
    window.addEventListener("online", () => this.setOnlineStatus(true));
    window.addEventListener("offline", () => this.setOnlineStatus(false));
  }

  componentWillUnmount() {
    window.removeEventListener("online");
    window.removeEventListener("offline");
  }
  setOnlineStatus = isOnline => this.setState({ online: isOnline });
  render() {
    return (
      <div>
        {this.state.online ? (
          <div>
            <h1>Online</h1>
            {this.props.children}
          </div>
        ) : (
          <h1>Offline</h1>
        )}
      </div>
    );
  }
}

export default OnlineOfflineWrapper;
