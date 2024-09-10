import React from 'react'
import './Login.css'
import userimg from './user.png'
import passwordimg from './padlock.png'
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
					Login to access data and information
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
						<input type="text" name="email" id="email" className="email" placeholder="Type your username" />
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
					<input type="password" name="passw" id="passw" className="passw" placeholder="Type your password" img src={userimg} />

				</div>
				</div>
				<div className="text">
					Forgot password ?
				</div>
				<button type="submit" className="login-btn">Login</button>
			</form>
      </div>
      </div>
    </>
  )
}

export default Login