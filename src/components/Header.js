import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
const logo = "/Netflix-Logo.wine.svg";
export const Header = () => {
  return (
    <div className="navigation-header">
      <div className="header-logo">
        <img src={logo} alt="logo_netflix" />
      </div>

      <ul>
        <li>
          <NavLink to="/tendances">Tendances</NavLink>
          <NavLink to="/">Home-Movies</NavLink>
          <NavLink to="/myliste">MyListe</NavLink>
        </li>
      </ul>
    </div>
  );
};
