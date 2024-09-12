import React from 'react';
import "./ViewPost.css";
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

function ViewPost() {
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