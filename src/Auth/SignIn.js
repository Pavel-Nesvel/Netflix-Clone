import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../styles/signUp.css";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const { currentUser, login } = useAuth();
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (e) {
      console.log("error",e)
    }
    setLoading(false);
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  console.log("value",email)
  
    return (
        <div className="signUp-container">
          <div className="form-container">
            <h1>Connexion</h1>
            <form  onSubmit={handleSubmit} >
              <input type="text" 
              name="email"
               id="email" 
               value={email}
               onChange={handleEmail}
               placeholder="votre email" />
              <input
                type="passWord"
                name="passWord"
                id="passWord"
                placeholder="mot de passe"
                value={password}
                onChange={handlePassword}
              />
              <input type="submit" value="Connexion" />
            </form>
            
          </div>
        </div>
      );
}

