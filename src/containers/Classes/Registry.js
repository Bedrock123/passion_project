import React, { Component } from "react";
import BabsonClasses from "../../components/navigation/classes.json";
import { FiSearch } from "react-icons/fi";

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
        <h3 className="page-subheader">
          Search {' '}<FiSearch />
        </h3>
      </div>
    );
  }
}

export default Registry;
