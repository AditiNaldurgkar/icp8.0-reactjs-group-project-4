import React, { useEffect, useState } from 'react';
import "./ViewPost.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import ViewJobCards from '../../components/ViewJobCards/ViewJobCards';

function ViewPost() {
  const [postData,setpostData] = useState([]);

  useEffect(()=>{
    const savedJobDetails = JSON.parse(localStorage.getItem("postData"))||[];
    setpostData(savedJobDetails);
  },[]);

  
  return (
    <div>
      <Sidebar />
      <div className='view-post-heading'>
        <h2>View Job Post</h2>
      </div>

    </div>
  )
}

export default ViewPost