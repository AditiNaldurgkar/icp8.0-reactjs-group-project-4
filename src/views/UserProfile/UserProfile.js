import React, { useEffect, useState } from 'react'
import '../UserProfile/UserProfile.css'
import UserProfileimg from '../../views/UserProfile/userprofileimg.png'
import Sidebar from '../../components/Sidebar/Sidebar'


function UserProfile() {
 const [jobs, setappliedjobs] = useState([])
 useEffect(()=>{
  const jobs = JSON.parse(localStorage.getItem('appliedjobs')) || [];
  setappliedjobs(jobs)
 } , [])


  return (
    <div className='container'>
        <img src={UserProfileimg} className='img1'/>
      

      
        <Sidebar/>
        <div className='Show'></div>
</div>
)
}


export default UserProfile