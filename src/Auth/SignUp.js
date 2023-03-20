import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../styles/signUp.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { currentUser, register } = useAuth();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return alert("les deux mot de passe ne correspondent pas !");
    }if(password.length<6){
      setError(true)
    }
    try {
      setLoading(true);
      await register(email, password);
      navigate("/");
    } catch (e) {
      console.log("error",e)
    }
    setLoading(false);
    setError(false)
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div className="signUp-container">
      <div className="form-container">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder="votre email"
          />
          <input
            type="passWord"
            name="passWord"
            id="passWord"
            required
            value={password}
            onChange={handlePassword}
            placeholder="votre mot de passe"
          />
          {error && <p style={{color: error ? "red":null}}>le mot de passe doit faire minimum 6 caractere</p>}
          <input
            type="passWord"
            name="passWordConfirm"
            id="passWordConfirm"
            required
            value={passwordConfirm}
            onChange={handlePasswordConfirm}
            placeholder="confirmez votre mot de passe"
          />
          <input
            type="submit"
            value="inscrption"
          />
        </form>
        <div className="signUp-count">
          <h2>Vous etes déjà inscrit ?</h2>
          <span>
            {" "}
            <NavLink to="/signIn">Cliquez ici !</NavLink>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
