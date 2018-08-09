import React, { Component } from "react";
import BabsonClasses from "../../components/navigation/classes.json";

class Registry extends Component {

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
            <h2>Registry</h2>
           
        </div>
    )
  }
}

export default Registry;
