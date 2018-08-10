import React, { Component } from "react";
import { FiCrosshair, FiCalendar } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";
import { NavLink } from "react-router-dom";

class TabBar extends Component {
  render() {
    return (
      <footer className="tab-bar-wrapper">
        <NavLink exact className="tab-bar-item" to="/" activeClassName="active">
          <FaCreditCard className="tab-bar-icon" />
          <p>Registry</p>
        </NavLink>
        <NavLink
          className="tab-bar-item"
          to="/class-track"
          activeClassName="active"
        >
          <FiCrosshair className="tab-bar-icon" />
          <p>Class Track</p>
        </NavLink>
        <NavLink
          className="tab-bar-item"
          to="/my-schedule"
          activeClassName="active"
        >
          <FiCalendar className="tab-bar-icon" />
          <p>My Schedule</p>
        </NavLink>
      </footer>
    );
  }
}

export default TabBar;
