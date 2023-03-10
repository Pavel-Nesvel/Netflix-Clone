import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/signUp.css";

export const SignUp = () => {
  return (
    <div className="signUp-container">
      <div className="form-container">
        <h1>S'inscrire</h1>
        <form >
          <input type="text" name="email" id="email" placeholder="votre email" />
          <input
            type="text"
            name="passWord"
            id="passWord"
            placeholder="mot de passe"
          />
          <input type="submit" value="inscrption" />
        </form>
        <div className="signUp-count">
            <h2>Vous etes déjà inscrit ?</h2>
            <span> <NavLink to="/signIn">Cliquez ici !</NavLink>  </span>
        </div>
      </div>
    </div>
  );
};
