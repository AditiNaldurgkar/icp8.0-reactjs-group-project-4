import React, { useEffect, useState } from 'react';
import '../UserProfile/UserProfile.css';
import UserProfileimg from '../../views/UserProfile/userprofileimg.png';
import linkedinimg from '../../views/UserProfile/linkedinimg.png';
import githubimg from '../../views/UserProfile/githubimg.png';
import facebookimg from '../../views/UserProfile/facebook (1).png';
import wave from '../../views/UserProfile/wave.png';
import Sidebar from '../../components/Sidebar/Sidebar';

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
      <h4 className='head4'>Your Applied Jobs:</h4>
      <span className='userdetails'>
        <div className='username'><b>Hello {USER.username || 'User'}!</b></div> 
        <div className='useremail'>{USER.email || 'No email found'}</div>
        <div className='jobrole'><b>JOB ROLE: </b>{USER.jobRole || 'Not specified'}</div>
        <div className='socialmedia'>
          <img src={linkedinimg} className='img0' alt='LinkedIn' /><p className='url1'>{SOCIALMEDIA.linkdinurl || 'N/A'}</p>
          <img src={githubimg} className='img2' alt='GitHub' /><p className='url2'>{SOCIALMEDIA.githuburl || 'N/A'}</p>
          <img src={facebookimg} className='img3' alt='Facebook' /><p className='url3'>{SOCIALMEDIA.facebookurl || 'N/A'}</p>  
        </div>
      </span>

      {appliedjobs.length > 0 ? (
        appliedjobs.map((appliedjob, index) => {
          const { title, description, company, salary_max, salary_min, location } = appliedjob;
          return  (
            <div className='jobs' key={index}> 
              <span className='titles'><b>Title: </b>{title || 'No title'}</span>
              <br /><br />
              <span className='jobdetails'><b>Job Description: </b></span><span className='description'>{description || 'No description'}</span>
              <br /><br />
              <span className='company'><b>Company name: </b>{company?.display_name || 'Not specified'}</span>
              <br /><br />
              <span className='salary'><b>Maximum Salary: </b></span>{salary_max ? `$${salary_max}` : 'Not specified'}
              <br /><br />
              <span className='salary'><b>Minimum Salary: </b></span>{salary_min ? `$${salary_min}` : 'Not specified'}
              <br /><br />
              <span className='location'><b>Location: </b>{location?.display_name || 'Not specified'}</span>
            </div>
          );
        })
      ) : (
        <p>No jobs applied yet.</p>
      )}

      <Sidebar />
      <div className="verticalline"></div>
      <div className='Show'></div>
    </div>
  );
}

export default UserProfile;
