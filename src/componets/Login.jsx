
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/user-profile"); // Redirect to UserProfile page
    } else {
      setError("Invalid email or password! Please try again.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Signin to your 
        <br></br>
        PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur 
        <br />
         Lorem ipsum dolor sit, amet consectetur </p>
      <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;