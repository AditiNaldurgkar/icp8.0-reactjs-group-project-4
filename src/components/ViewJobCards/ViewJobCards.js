import React from 'react'
import "./ViewJobCards.css"

function removePost(index) {
    const savedJobDetails = JSON.parse(localStorage.getItem("postData")) || [];
    savedJobDetails.splice(index, 1);
    localStorage.setItem("postData", JSON.stringify(savedJobDetails));

    window.location.reload()
}

function EmploymentType({employmentType}){
    const EMPTYPE_EMOJIS = {
        "full-time":"⏱️",
        "part-time":"⌛",
        "contract":"🗒️",
        "internship":"🎓"
    }

    const formattedEmpType = employmentType.carAt(0).toUpperCase() + employmentType.slice(1).toLowerCase();

    return(
        <div>
            <span className='emp-type-emoji'>
                {EMPTYPE_EMOJIS[employmentType]}
            </span>
            {formattedEmpType}
        </div>
    )
}



function ViewJobCards({jobTitle, jobDescription ,location, employmentType, salaryMin, salaryMax, applicationDeadline, companyName, onRemove }) {
  return (
    <div className='job-post-cards'>
        
        <div>
            <h2 className='job-post-title'>
                {jobTitle}
            </h2>
            <p className='job-post-decription'>
                {jobDescription}
            </p>
            <EmploymentType  employmentType={employmentType}/>
            <button className='rmv-btn'
            onClick={()=>{
                onRemove(index);
            }}>
                Remove
            </button>
        </div>
    </div>
  ) 
}

export default ViewJobCards