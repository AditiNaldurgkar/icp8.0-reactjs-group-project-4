import React, { useState } from "react";
import './Login.css'
import userimg from './user.png'
import passwordimg from './padlock.png'
import IMG from './img.PNG'
import toast , {Toaster}from "react-hot-toast";
const Login=()=>
 {
	const [username, setUsername] = useState('');
	const [password , setPassword] = useState('');
    
      const handleLogin = () => {
        const storeData =localStorage.getItem(username);
    
        if (storeData)
		 {
			const userData = JSON.parse(storeData);
          if (userData.password === password)       
		 {
            toast.success('Login successful !');
          }
		   else {
           toast.error('Incorrect password');
          }
        } 
		else {
         toast.error('User not found !')
        }
      };
  return (
    <>
    <div className="login-main-container">
		<div className="left-container">
			<div className="welcome-heading">
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
			<form>
				<div>
					<label className="text-feild">Username</label>
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
								placeholder="Type your username" 
								value={username}
                                onChange={(e)=> setUsername(e.target.value)}/>
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
						   value={password}
                           onChange={(e)=> setPassword(e.target.value)} />

				</div>
				</div>
				<div className="forgot-text">
					Forgot password ?
				</div>
				<button type="submit" className="login-btn" onClick={handleLogin}>Login</button>
				<Toaster/>
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