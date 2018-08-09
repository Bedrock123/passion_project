import React, { Component } from "react";
import { FiSearch, FiDatabase, FiCrosshair, FiCalendar } from "react-icons/fi";

class TabBar extends Component {
  render() {
    return (
      <footer className="tab-bar-wrapper">
        <div className="tab-bar-item">
          <FiDatabase className="tab-bar-icon" />
          <p>Registry</p>
        </div>
        <div className="tab-bar-item">
          <FiSearch className="tab-bar-icon" />
          <p>Search</p>
        </div>
        <div className="tab-bar-item">
          <FiCrosshair className="tab-bar-icon" />
          <p>Track</p>
        </div>
        <div className="tab-bar-item">
          <FiCalendar className="tab-bar-icon" />
          <p>My Schedule</p>
        </div>
      </footer>
    );
  }
}

export default TabBar;
