
import React from "react";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  return (
    <div>
      <h2>Welcome, {user.fullName}!</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.companyName}</p>
    </div>
  );
};

export default UserProfile;