import React, { Component } from "react";
import BabsonClasses from "../../components/navigation/classes.json";
import { FiSearch } from "react-icons/fi";
import Dock from "react-dock";

class Registry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderAllBabsonClasses() {
    return BabsonClasses.map(BabsonClass => {
      return (
        <div className="registry-item">
          <p>{BabsonClass.class_name}</p>
          <p>{BabsonClass.day_of_week}</p>
          <p>{BabsonClass.spots_filled_string}</p>
          <p>{BabsonClass.course_code}</p>
          <p>{BabsonClass["professor(s)"]}</p>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="registry-wrapper">
        <Dock
          position="top"
          fluid={false}
          dockStyle={{
            background: "#fff"
          }}
          size={1000}
          dimMode={"opaque"}
          dimStyle={{
            background: "rgba(0, 0, 0, 0.45)"
          }}
          durat
          isVisible={this.state.isVisible}
        >
          <div
            onClick={() => this.setState({ isVisible: !this.state.isVisible })}
          >
            X
          </div>
        </Dock>
        <h2>Registry</h2>
        <h3
          className="page-subheader"
          onClick={() =>
            this.setState({
              isVisible: !this.state.isVisible
            })
          }
        >
          Search <FiSearch />
        </h3>
        <div className="registry-inner-wrapper" />
      </div>
    );
  }
}

export default Registry;
