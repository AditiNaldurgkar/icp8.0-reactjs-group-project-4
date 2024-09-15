import React, { useEffect, useState } from 'react'
import '../UserProfile/UserProfile.css'
import UserProfileimg from '../../views/UserProfile/userprofileimg.png'
import Sidebar from '../../components/Sidebar/Sidebar'


function UserProfile() {
 const [appliedjobs,setappliedjobs] = useState([]);
 useEffect(()=>{
  const appliedjobs=JSON.parse(localStorage.getItem("appliedjobs"))|| [];
  setappliedjobs(appliedjobs);
 }, []);
  


  return (
    
    <div className='container'>
        <img src={UserProfileimg} className='img1'/>
        <h4 className='head4'>Your Applied Jobs:</h4>
       {
        appliedjobs.map((appliedjob)=>{
          const{title,description}=appliedjob;
             return(
              
              <div className='jobs'> 
              <span>Title : </span> {title}
               <br></br>
               <span className='jobdetails'>Job Description : </span> {description}
              </div>
             )
})
}
       
        <Sidebar/>
      

<div className="line"></div>
      
       
        <div className='Show'></div>
</div>
)
}


export default UserProfile