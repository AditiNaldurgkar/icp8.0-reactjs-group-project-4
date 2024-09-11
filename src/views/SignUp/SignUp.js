import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './SignUp.css';

const Signup = () => {
    const [role, setRole] = useState('Job Seeker');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [companyName, setCompanyName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(formData));

    console.log("User signed up and data stored in localStorage:", formData);
  };

  return (
    <form onSubmit={handleSignUp}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;