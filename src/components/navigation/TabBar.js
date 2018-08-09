import React, { Component } from "react";
import { FiSearch, FiDatabase, FiCrosshair, FiCalendar } from "react-icons/fi";
import { NavLink } from "react-router-dom";

class TabBar extends Component {
  render() {
    return (
      <footer className="tab-bar-wrapper">
        <NavLink
          className="tab-bar-item"
          to="/registry"
          activeClassName="active"
        >
          <FiDatabase className="tab-bar-icon" />
          <p>Registry</p>
        </NavLink>
        <NavLink className="tab-bar-item" to="/search" activeClassName="active">
          <FiSearch className="tab-bar-icon" />
          <p>Search</p>
        </NavLink>
        <NavLink className="tab-bar-item" to="/track" activeClassName="active">
          <FiCrosshair className="tab-bar-icon" />
          <p>Track</p>
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
