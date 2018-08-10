import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
        <div
        className={"registry-item " + this.props.color }
      >
        <div className="registry-item-header">
          <p className="main-value">{this.props.BabsonClass.class_name}</p>
        </div>
        <div className="registry-item-body">

          <div className="registry-item-block">
            <p className="main-value">
            <p className="label">Time</p>
              {this.props.BabsonClass.day_of_week} | {this.props.BabsonClass.time}
            </p>
          </div>
          <div className="registry-item-block">
            <p className="main-value">
            <p className="label">Semester</p>
              {this.props.BabsonClass.semester}
            </p>
          </div>
        </div>
        <div className="registry-item-body">
        <div className="registry-item-block">
        <p className="label">Code</p>
            <p className="main-value">{this.props.BabsonClass.course_code}-{this.props.BabsonClass.course_section}</p>
          </div>
          <div className="registry-item-block">
          <p className="label">Spots Left</p>
            <p className="main-value">{this.props.BabsonClass.spots_filled_string}</p>
          </div>
          <div className="registry-item-block">
            <p className="label">Credits</p>
            <p className="main-value">{this.props.BabsonClass.credits}</p>
          </div>
        </div>
        <div className="registry-item-body">
          <div className="registry-item-block">
          <p className="label">Professors</p>
            <p className="main-value">{this.props.BabsonClass["professor(s)"]}</p>
          </div>
        </div>
        <div class="registry-badge">
        {this.props.BabsonClass.spots_taken >= this.props.BabsonClass.spots_available ?
            <p>FULL</p>
            :
            
            <p>OPEN</p>

        }
        </div>
      </div>
    );
  }
}

export default Card;
