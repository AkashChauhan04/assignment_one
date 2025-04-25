import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateAccount.module.css";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    companyName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.some((user) => user.email === formData.email);
    if (userExists) {
      alert("Email already registered! Try logging in.");
      return;
    }

    // Add new user to the array
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className={styles.formContainer}>
      <h1>Create your PopX account</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} />
        <button type="submit">Create Account</button>
      </form>

      
    </div>
  );
};

export default CreateAccount;


