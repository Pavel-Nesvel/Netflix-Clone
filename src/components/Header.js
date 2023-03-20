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
          <NavLink>
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                className="logout"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            }
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
