import React, { useState } from 'react';
// import './styles/formStyles.css';
import { Link } from "react-router-dom"


const SignupForm = () => {
  const [formData, setFormData] = useState({
    FirstName:'',
    LastName:'',
    Address:'',

    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your own logic for signup here (e.g., display a success message)
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={formData.FirstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="firstName"
          placeholder="Enter Last Name"
          value={formData.LastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Address"
          placeholder="Enter the Address"
          value={formData.Address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
        <Link className="link-button" to="/login">Login here</Link>

      </form>
    </div>
  );
};

export default SignupForm;
