import React from 'react'
import '../UserProfile/UserProfile.css'
import UserProfileimg from '../../views/UserProfile/userprofileimg.png'
import Sidebar from '../../components/Sidebar/Sidebar'


function UserProfile() {
  return (
    <div className='container'>
        <img src={UserProfileimg} className='img1'/>
    </div>
  )
}

export default UserProfile