
import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.welcomeContainer}>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipisicing </p>

      <Link className={styles.createAccountButton} to="/create-account">Create Account</Link>
      <button className={styles.loginButton}>Already Registered? <Link to="/login">Login</Link></button>
    </div>
  );
};

export default Home;