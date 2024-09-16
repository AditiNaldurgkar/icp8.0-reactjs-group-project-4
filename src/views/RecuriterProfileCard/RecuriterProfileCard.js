import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./RecuriterProfileCard.css"
import UserProfileimg from "./../UserProfile/userprofileimg.png"


function RecuriterProfileCard() {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        const savedProfileDetails = JSON.parse(localStorage.getItem("items")) || [];
        setItems(savedProfileDetails);
    },[])

    return (
        <div>
            <Sidebar />
            <div className='view-post-heading'>
                <h2>Recruiter Profile</h2>
            </div>
            <div className='dtl-container'>
                <img src={UserProfileimg} className='recruiter-profile-img' /><hr></hr>
                <div className='recruiter-profile-details'>
                    
                </div>
            </div>
            <div className='Show'>
            </div>
        </div>
    )
}

export default RecuriterProfileCard