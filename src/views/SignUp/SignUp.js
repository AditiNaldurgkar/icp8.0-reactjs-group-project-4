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

    const handleSignup = () => {
      if (password !== confirmPassword) {
          toast.error('Password do not match ❤️');
          return;
      }

      const userData = { username, email, password, role, jobRole, companyName };
      localStorage.setItem(username, JSON.stringify(userData));
      toast.success(`${role.charAt(0).toUpperCase() + role.slice(1)} Signed up successfully 💚`);
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