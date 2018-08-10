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
      if (BabsonClass.class_name !== "Title") {
        return (
          <div
            className="registry-item"
            onClick={() =>
              this.setState({
                isVisible: !this.state.isVisible
              })
            }
          >
            <div className="registry-item-header">
              <p className="main-value">{BabsonClass.class_name}</p>
            </div>
            <div className="registry-item-body">
              <div className="registry-item-block">
                <p className="label">COURSE NO.</p>
                <p className="main-value">{BabsonClass.course_code}</p>
              </div>
              <div className="registry-item-block">
                <p className="label">DAY TIME(S)</p>
                <p className="main-value">
                  {BabsonClass.day_of_week} | {BabsonClass.time}
                </p>
              </div>
            </div>
            <div className="registry-item-body">
              <div className="registry-item-block">
                <p className="label">INTRUSTORS</p>
                <p className="main-value">{BabsonClass["professor(s)"]}</p>
              </div>
              <div className="registry-item-block">
                <p className="label">CREDITS</p>
                <p className="main-value">{BabsonClass.credits}</p>
              </div>
            </div>
            <div className="registry-item-body">
              <div className="registry-item-block">
                <p className="label">SEMESTER</p>
                <p className="main-value">{BabsonClass.semester}</p>
              </div>
              <div className="registry-item-block">
                <p className="label">SPOTS LEFT</p>
                <p className="main-value">{BabsonClass.spots_filled_string}</p>
              </div>
            </div>
          </div>
        );
      }
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
          {this.renderAllBabsonClasses()}
        </div>
      </div>
    );
  }
}

export default Registry;
