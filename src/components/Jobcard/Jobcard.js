import React from 'react'
import './jobcard.css'

const Jobcard = ({jobInfo}) => {
  return (
    <div className='job-card-body'>
       {console.log(jobInfo)}
       <div className='job-headings'>
          <span className='job-intial-logo'>{jobInfo.company.display_name[0]}</span>
          <div className='company-name'>{jobInfo.company.display_name.split("-","1")}</div>
       </div>
       <div className='info-container'>
        <span className='job-info '><i className="ri-bard-fill star"></i> ROLE : {jobInfo.title}</span>
        <spam className="job-info"><i className="ri-arrow-right-down-line"></i> MIN-SALARAY : {jobInfo.salary_min} $</spam>
        <spam className="job-info"><i className="ri-arrow-right-up-line"></i> MIN-SALARAY : {jobInfo.salary_max} $</spam>
        <button className='job-btn'>know more</button>
       </div>
    </div>
  )
}
//jobInfo.company.display_name


export default Jobcard
