import React, { useEffect, useState } from 'react';
import '../UserProfile/UserProfile.css';
import UserProfileimg from '../../views/UserProfile/userprofileimg.png';
import linkedinimg from '../../views/UserProfile/linkedinimg.png';
import githubimg from '../../views/UserProfile/githubimg.png';
import facebookimg from '../../views/UserProfile/facebook (1).png';
import Instagramimg from '../../views/UserProfile/instagram (2).png';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserProfilecards from '../../components/UserProfilecards/UserProfilecards';

function UserProfile() {
  const [appliedjobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedjobs'));
    setAppliedJobs(appliedJobs);
  }, []);

  const USER = JSON.parse(localStorage.getItem('LOGINUSER')) || {};
  const SOCIALMEDIA = JSON.parse(localStorage.getItem('SOCIALMEDIA')) || {};
   
  
  return (
    <div className='container'>
      <img src={UserProfileimg} className='img1' alt='User Profile' />
      <div className='socialmedia'>
          <img src={linkedinimg} className='img0' alt='LinkedIn' /><p className='url1' >{SOCIALMEDIA.linkdinurl || 'N/A'}</p>
          <img src={githubimg} className='img2' alt='GitHub' /><p className='url2'>{SOCIALMEDIA.githuburl || 'N/A'}</p>
          <img src={facebookimg} className='img3' alt='Facebook' /><p className='url3'>{SOCIALMEDIA.facebookurl }</p>  
          <img src={Instagramimg} className='img5' alt='Facebook' /><p className='url5'>{SOCIALMEDIA.instaurl || 'N/A'}</p>  
       </div>
      <span className='username'><b>Hello {USER.username || 'User'}!</b></span> 
      <span className='useremail'>{USER.email || 'No email found'}</span>
      <span className='jobrole'><b>JOB ROLE: </b>{USER.jobRole || 'Not specified'}</span>
      <h4 className='head4'><b>Your Applied Jobs:</b></h4>
      
      <div className='job-container'>
      {appliedjobs.length > 0 ? (
        appliedjobs.map((appliedjob, index) => {
          const { title, description, company, salary_max, salary_min, location } = appliedjob;
          return  (
           <div>
           <UserProfilecards
           title={title}
           description={description}
           salary_max={salary_max}
           salary_min={salary_min}
           company={company}
           location={location}/>
           </div>
           
          );
        })
      ) : (
        <p>No jobs applied yet.</p>
      )}
      </div>
      <Sidebar/>
      <div className="verticalliness"></div>
      <div className='Show'></div>
    </div>
  );
}

export default UserProfile;
