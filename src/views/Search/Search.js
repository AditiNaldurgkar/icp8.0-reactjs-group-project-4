import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './search.css'
import { jobNames } from '../../config/searchData'

const Search = () => {

    const [jobTittle, setjobTittle] = useState(null)


  return (
    <div>
       <Sidebar/>
        <div className='search-container'>
             <div className='search-input-container'> 
                 <input 
                 className='search-input'
                 type='text' 
                 placeholder='enter the job tittle' 
                 value={jobTittle} 
                 onChange={(e)=>{setjobTittle(e.target.value)}}>
                 </input>
                 <button className='search-btn'><i class="ri-find-replace-line"></i></button>
             </div>
             <div className='job-types-container'>
                 {jobNames.map((jobTitle)=>(
                    <span className='job-titles' onClick={()=>{setjobTittle(jobTitle)}}>{jobTitle} <i class="ri-arrow-right-up-line"></i></span>
                 ))}
             </div>
        </div>
    </div>
  )
}

export default Search
