import { async } from "@firebase/util";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../styles/Header.css";
export const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/signUp");
    } catch (err) {
      return err;
    }
  };
  return (
    <div className="navigation-header">
      <div className="header-logo">
        <em> Ciné Fusion</em>
      </div>

      <ul>
        <li>
          <NavLink to="/tendances">Tendances</NavLink>
          <NavLink to="/">Home-Movies</NavLink>
          <NavLink to="/myliste">MyListe</NavLink>

          {currentUser && (
            <>
              <NavLink>Deconnexion</NavLink>
              <NavLink onClick={handleLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 logout"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </NavLink>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};
