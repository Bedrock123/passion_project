import React, { Component } from "react";
import BabsonClasses from "../../components/navigation/classes.json";
import { FiSearch } from "react-icons/fi";
import Dock from "react-dock";

const cardColors = [
  'blue-card',
  'red-card',
  'green-card',
  'yellow-card',
  'purple-card',
  'silver-card',
]

class Registry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderAllBabsonClasses() {
    return BabsonClasses.map(BabsonClass => {
      var color = cardColors[Math.floor(Math.random()*cardColors.length)]
      if (BabsonClass.course_code === "ACC1000") {
        return (
          <div
            className={"registry-item " + color }
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
                <p className="main-value">
                <p className="label">Time</p>
                  {BabsonClass.day_of_week} | {BabsonClass.time}
                </p>
              </div>
            </div>
            <div className="registry-item-body">
            <div className="registry-item-block">
            <p className="label">Code</p>
                <p className="main-value">{BabsonClass.course_code}-{BabsonClass.course_section}</p>
              </div>
              <div className="registry-item-block">
              <p className="label">Spots Left</p>
                <p className="main-value">{BabsonClass.spots_filled_string}</p>
              </div>
              <div className="registry-item-block">
                <p className="label">Credits</p>
                <p className="main-value">{BabsonClass.credits}</p>
              </div>
            </div>
            <div className="registry-item-body">
              <div className="registry-item-block">
              <p className="label">Professors</p>
                <p className="main-value">{BabsonClass["professor(s)"]}</p>
              </div>
            </div>
            <div class="registry-badge">
                <p>FULL</p>
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
        <div className="registry-search-wrapper">
            <FiSearch />
            <input type="text" label="search" placeholder="Search"/>
        </div>
        <div className="registry-inner-wrapper">
          {this.renderAllBabsonClasses()}
        </div>
      </div>
    );
  }
}

export default Registry;
