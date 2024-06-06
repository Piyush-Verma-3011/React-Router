import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Menu = () => {
  return (
    <div className="menu-container">
     
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
