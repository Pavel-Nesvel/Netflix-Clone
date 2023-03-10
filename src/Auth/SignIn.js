import React from 'react';
import "../styles/signUp.css";

export const SignIn = () => {
    return (
        <div className="signUp-container">
          <div className="form-container">
            <h1>Connexion</h1>
            <form >
              <input type="text" name="email" id="email" placeholder="votre email" />
              <input
                type="text"
                name="passWord"
                id="passWord"
                placeholder="mot de passe"
              />
              <input type="submit" value="Connexion" />
            </form>
            
          </div>
        </div>
      );
}

