import React from 'react'
import './Login.css'
import userimg from './user.png'
import passwordimg from './padlock.png'
import IMG from './img.PNG'
function Login() {
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
			<form action="">
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
								placeholder="Type your email" />
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
					       name="passw" 
						   id="passw" 
						   className="passw" 
						   placeholder="Type your password" />

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