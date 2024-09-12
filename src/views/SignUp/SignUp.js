

  return (
    <div className="signup-container">
        <h2>Signup</h2>
        <div className="form-group">
            <label>Select Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Job Seeker">Job Seeker</option>
                <option value="recruiter">Recruiter</option>
            </select>
        </div>
        <div className="form-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {role === 'recruiter' && (
            <>
                <div className="form-group">
                    <label>Job Role Vacancy:</label>
                    <input type="text" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Company Name:</label>
                    <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </div>
            </>
        )}
        {role === 'Job Seeker' && (
            <div className="form-group">
                <label>Job Role Needed:</label>
                <input type="text" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
            </div>
        )}
        <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button onClick={handleSignup} className="btn-signup">Sign Up</button>
        <Toaster />
    </div>
);
};

export default Signup;