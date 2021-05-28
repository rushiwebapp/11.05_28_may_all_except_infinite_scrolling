import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="menu-bar navbar navbar-light bg-dark">
      <NavLink exact className="navbar-link" to="/" activeClassName="active">
        <li>Headlines</li>
      </NavLink>
      <NavLink
        exact
        className="navbar-link"
        to="/Sport"
        activeClassName="active"
      >
        <li>Sport</li>
      </NavLink>
      <NavLink
        exact
        className="navbar-link"
        to="/Tech"
        activeClassName="active"
      >
        <li>Tech</li>
      </NavLink>
      <NavLink
        exact
        className="navbar-link"
        to="/Business"
        activeClassName="active"
      >
        <li>Business</li>
      </NavLink>
      <NavLink
        exact
        className="navbar-link"
        to="/World"
        activeClassName="active"
      >
        <li>World</li>
      </NavLink>
    </nav>
  );
};

export default Navbar;
