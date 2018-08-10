import React, { Component } from "react";
import BabsonClasses from "../../components/navigation/classes.json";
import { FiSearch } from "react-icons/fi";
import Dock from "react-dock";
import Card from "../../components/Registry/Card";

const cardColors = [
  "blue-card",
  "red-card",
  "green-card",
  "yellow-card",
  "purple-card",
  "silver-card"
];

function getCardColor(dayOfWeek) {
  if (dayOfWeek === "MW") {
    return "blue-card";
  } else if (dayOfWeek === "TR") {
    return "red-card";
  } else if (dayOfWeek === "W") {
    return "purple-card";
  } else if (dayOfWeek === "T") {
    return "green-card";
  } else {
    return "silver-card";
  }
}

class Registry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderAllBabsonClasses(ID) {
    return BabsonClasses.map(BabsonClass => {
      var color = getCardColor(BabsonClass.day_of_week);
      if (ID) {
        if (BabsonClass.unique_key_internal === ID) {
          return <Card BabsonClass={BabsonClass} color={color} />;
        }
      } else {
        if (BabsonClass.course_code === "ACC1000") {
          return (
            <div
              onClick={() =>
                this.setState({
                  isVisible: !this.state.isVisible,
                  classID: BabsonClass.unique_key_internal
                })
              }
            >
              <Card BabsonClass={BabsonClass} color={color} />
            </div>
          );
        }
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
          size={window.innerHeight}
          duration={200}
          isVisible={this.state.isVisible}
          className="class-modal-window"
          dockStyle={{
            background: "#fefefe",
            padding: "0px 12px",
            width: "auto"
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

          {this.renderAllBabsonClasses(this.state.classID)}
          <div className="class-detail-wrapper">
            <div className="class-detail-row">
              <div className="class-detail-item">
                <p className="label">COURSE LEVEL</p>
                <p className="value">Foundation Liberal Arts</p>
              </div>
              <div className="class-detail-item">
                <p className="label">SEMESTER</p>
                <p className="value">Full Session</p>
              </div>
            </div>
            <div className="class-detail-row">
              <div className="class-detail-item">
                <p className="label">LOCATION</p>
                <p className="value">Tommasso 207</p>
              </div>
            </div>
            <div className="class-detail-row">
              <div className="class-detail-item">
                <p className="label">DESCRIPTION</p>
                <p className="value">
                  FYS1000: First Year Seminar This course will challenge
                  students to critically examine important aspects of college
                  student life, such as engaging in scholarly dialogue, becoming
                  a proactive learner, and valuing a diverse and inclusive
                  environment. Students will also be asked to reflect on their
                  own abilities and how they can make an impact on campus and
                  beyond. Additionally, students will develop important
                  relationships with fellow students, peer leaders, faculty, and
                  administrators. Students will earn a grade and one academic
                  credit for their successful participation in this program.
                  Participation in FYS is a graduation requirement for all
                  Babson students.
                </p>
              </div>
            </div>
          </div>
          <div className="class-track-button-row">
            <div className="class-track-button">
              <p>TRACK</p>
            </div>
            <div className="class-track-button">
              <p>SCHEDULE</p>
            </div>
            <div className="class-track-button">
              <p>SHARE</p>
            </div>
          </div>
        </Dock>
        <div className="registry-search-wrapper">
          <FiSearch />
          <input type="text" label="search" placeholder="Search" />
        </div>
        <div className="registry-inner-wrapper">
          {this.renderAllBabsonClasses(null)}
        </div>
      </div>
    );
  }
}

export default Registry;
