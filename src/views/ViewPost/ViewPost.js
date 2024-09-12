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

  const handleRemove = (index) => {
    const updatedPostData = postData.filter((_,i)=> i !== index);
    localStorage.setItem("postData", JSON.stringify(updatedPostData));
    setpostData(updatedPostData);
  };


  return (
    <div>
      {/* <Sidebar /> */}
      <div className='view-post-heading'>
        <h2>View Job Post</h2>
      </div>
      {postData.map((post, index)=>{
        const{jobTitle, jobDescription, employmentType, } = post;
        return(
          <ViewJobCards
          index={index}
          jobTitle={jobTitle}
          jobDescription={jobDescription}
          employmentType={employmentType}
          onRemove={handleRemove}/>
        )
      })}
    </div>
  )
}

export default ViewPost