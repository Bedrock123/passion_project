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
          position="bottom"
          fluid={false}
          dockStyle={{ background: "#fff" }}
          size={window.innerHeight - 30}
          dimMode={"opaque"}
          dimStyle={{ background: "rgba(0, 0, 0, 0.45)" }}
          duration={200}
          isVisible={this.state.isVisible}
          className="class-modal-window"
          dockStyle={{
            background: "#fefefe",
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px"
          }}
        >
          <div
            onClick={() =>
              this.setState({
                isVisible: !this.state.isVisible
              })
            }
            className="close-modal-item"
          />
        </Dock>
        <h2>Registry</h2>
        <h3 className="page-subheader">
          Search <FiSearch />
        </h3>
        <div className="registry-inner-wrapper">
          <div
            className="registry-item"
            onClick={() =>
              this.setState({
                isVisible: !this.state.isVisible
              })
            }
          >
            <div className="registry-item-header">
              <p className="label">TITLE</p>
              <p className="main-value">INTRODUCTION TO FINANCIAL ACCOUNTING</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registry;
