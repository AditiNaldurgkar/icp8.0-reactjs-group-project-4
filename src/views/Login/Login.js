import React, { useEffect, useState } from "react";
import './Login.css'
import userimg from './user.png'
import passwordimg from './padlock.png'
import IMG from './img.PNG'
import toast , {Toaster}from "react-hot-toast";
import {Link, useNavigate, useNavigation} from 'react-router-dom';
import Navbar from './../../components/Navbar/Navbar'
import Footer from './../../components/Footer/Footer'
const Login=()=>
 {
	const [username, setUsername] = useState('');
	const [password , setPassword] = useState('');
    
	const navigate=useNavigate();
      const handleLogin = () => {
        const storeData =JSON.parse(localStorage.getItem("users"))|| [];
       console.log(storeData)
       storeData.forEach((user,index)=>{
		if(user.username == username && user.password == password)
		{
              toast.success("Login succesfully !")
			  localStorage.setItem("LOGINUSER" , JSON.stringify({...user,index}));
			  const date= new Date().getDate()
			  localStorage.setItem("storedate",date)
			  navigate("/search")
		}
		else
		{
			toast.error(" User not found")
		}
	   }) 	   
      };
	  const autologIn=()=>{
		const LOGINUSER =JSON.parse(localStorage.getItem("LOGINUSER"))|| [];
		let currentDate = new Date().getDate()
		
		 if(LOGINUSER){
			let storedate=localStorage.getItem("storedate");
		  let  sessionTime = Math.abs(currentDate-storedate)
					   if(sessionTime<=1){
						toast.success("Try to auto login")
						navigate("/search")

					}
		 }
		
		}
		autologIn();
  return (
    <>
	<Navbar/>
    <div className="login-main-container">
		<div className="left-container">
			<div className="welcome-heading">
				<h1 className="liner-text">
					Welcome back !!!!
				</h1>
				<h3 className="text-margin">
					Have an account ?
				</h3>
				<h6 className="text-margin">
					Login to access  information
				</h6>
			</div>
			<div>
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
				<Link to='/setting'>Forgot password ?</Link>
				</div>
				<button className="login-btn" onClick={handleLogin}>Login</button>
				<Toaster/>
			</div>
			<div className="last-line">
				Don't have an account ?        <Link to='/signup'>Sign up</Link>
			</div>
		</div>
		<div className="right-container">
			<img src={IMG} className="image" />
		</div>
      </div>
	  <div className="Show">
	  </div>
	  <Footer/>
    </>
  )
}

export default Login