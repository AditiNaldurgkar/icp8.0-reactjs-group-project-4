import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import './jobinfo.css'

function Jobinfo() {
  
     const ALL_JOBS = JSON.parse(localStorage.getItem('searchedJobs'))
     const {id} = useParams()
     let result =  ALL_JOBS.filter((JOB)=>{return(JOB.id===id)}); 
     result=result[0]
     console.log(result)
  return (<>
      <Sidebar/>
      <div className='jobs-info-container'>
       <Link to='/search'><span className='back-btn'><i class="ri-arrow-left-line"></i></span></Link>
       <div className='job-tittle-info'>
          <h2 className='liner-text job-tittle'>{result.company.display_name}</h2>
          <span>#{result.category.tag}</span>
       </div>
       <div className='job-discription-info'>
         {result.description}
       </div>
       <div className='company-info'>
          <h4 className='liner-text'>know more</h4>
       </div>
      </div>
    </>
  )
}

export default Jobinfo