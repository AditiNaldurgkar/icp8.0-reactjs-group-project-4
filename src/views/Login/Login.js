import React, { useState } from "react";
import './Login.css'
import userimg from './user.png'
import passwordimg from './padlock.png'
import IMG from './img.PNG'
function Login() {
	const [loginData, setLoginData] = useState({
        email: "",
        password: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
      };
    
      const handleLogin = (e) => {
        e.preventDefault();
    
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
    
        if (storedUserData) {
          if (
            storedUserData.email === loginData.email &&
            storedUserData.password === loginData.password
          ) {
            console.log("Login successful!");
          } else {
            console.log("Invalid email or password.");
          }
        } else {
          console.log("No user data found. Please sign up first.");
        }
      };
  return (
    <>
    <div className="main-container">
		<div className="left-container">
			<div className="heading">
				<h1>
					Welcome back !!!!
				</h1>
				<h3>
					Have an account ?
				</h3>
				<h6>
					Login to access  information
				</h6>
			</div>
			<form onSubmit={handleLogin}>
				<div>
					<label className="text-feild">Email</label>
					<div className="input-with-icon">
						<img
							src={userimg}
							alt="password icon"
							className="icon"
						/>
						<input type="text" 
						       name="email" 
						       id="email"
							    className="email" 
								placeholder="Type your email" 
								value={loginData.email}
                                onChange={handleInputChange}/>
					</div>
				</div>
				<div>
					<label className="text-feild">Password</label>
					<div className="input-with-icon">
						<img
							src={passwordimg} 
							alt="password icon"
							className="icon"
						/>
					<input type="password" 
					       name="password" 
						   id="passw" 
						   className="passw" 
						   placeholder="Type your password"
						   value={loginData.password}
                           onChange={handleInputChange} />

				</div>
				</div>
				<div className="text">
					Forgot password ?
				</div>
				<button type="submit" className="login-btn">Login</button>
			</form>
			<div className="last-line">
				Don't have an account ?        Sign up
			</div>
		</div>
		<div className="right-container">
			<img src={IMG} className="image" />
		</div>
      </div>
    </>
  )
}

export default Login