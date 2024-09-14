import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './SignUp.css';
import IMG from './Signup4.png';

const Signup = () => {
    const [role, setRole] = useState('Job Seeker');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [companyName, setCompanyName] = useState('');

    const isUsernameValid = (username) => {
        const validUsernamePattern = /^[a-zA-Z0-9_]+$/;
        return validUsernamePattern.test(username);
    };

    const isEmailValid = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSignup = (e) => {
        e.preventDefault();

        if (!isUsernameValid(username)) {
            toast.error('Username can only contain letters, numbers, and underscores ❤️');
            return;
        }

        if (!isEmailValid(email)) {
            toast.error('Please enter a valid email address ❤️');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long ❤️');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match ❤️');
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const isUsernameTaken = existingUsers.some(user => user.username === username);
        if (isUsernameTaken) {
            toast.error('Username already taken ❤️');
            return;
        }

        const userData = { username, email, password, role, jobRole, companyName };
        existingUsers.push(userData);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        toast.success(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully 💚`);


    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setJobRole('');
    setCompanyName('');

        };

    return (
        
        <div className="signup-container">

       <img src={IMG} className="image" />
    <div className="form-group">
             <label>Select Role</label>
             <select value={role} onChange={(e) => setRole(e.target.value)}>
                 <option value="Job Seeker">Job Seeker</option>
                 <option value="recruiter">Recruiter</option>
             </select>
         </div>
         <div className="form-group">
             <label>Username </label>
             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
         </div>
         <div className="form-group">
             <label>Email</label>
             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
         </div>
         {role === 'recruiter' && (
             <>
                 <div className="form-group">
                     <label>Job Role Vacancy</label>
                     <input type="text" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
                 </div>
                 <div className="form-group">
                     <label>Company Name</label>
                     <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                 </div>
             </>
         )}
         {role === 'Job Seeker' && (
             <div className="form-group">
                 <label>Job Role Needed</label>
                 <input type="text" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
             </div>
         )}
         <div className="form-group">
             <label>Password 🔒</label>
             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>
         <div className="form-group">
             <label>Confirm Password 🔒</label>
             <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
         </div>
         <button onClick={handleSignup} className="btn-signup">Register</button>

         
         <h2>Existing User? <button className='Navigate-btn'>Login</button></h2>


     <Toaster />
     
     </div>
     
 );
};

export default Signup;
