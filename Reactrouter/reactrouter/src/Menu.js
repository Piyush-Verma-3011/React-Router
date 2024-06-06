import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Menu = () => {
  return (
    <div className="menu-container">
      {/* <NavLink exact activeClassName="active-class" to="/">
        AboutUS
      </NavLink>
      <NavLink exact activeClassName="active-class" to="/contact">
        ContactUS
      </NavLink>
      <NavLink activeClassName="active-class" to="/contact/name">
        Name
      </NavLink>  active class is not working in older versions so follow below code*/}

      <NavLink exact className={({ isActive }) => {
          return isActive ? "active_class":"";
        }} to="/contact">
        Contact Us
      </NavLink>
      <NavLink exact className={({ isActive }) => {
          return isActive ? "active_class":"";
        }} to="/">
        About Us
      </NavLink>
      <NavLink exact className={({ isActive }) => {
          return isActive ? "active_class":"";
        }} to="/services">
        service
      </NavLink>


    </div>
  );
};

export default Menu;
