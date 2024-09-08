import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './search.css'
import { jobNames } from '../../config/searchData'
import axios from 'axios'



const searchJob = async (jobname)=>{
    
const options = {
    method: 'GET',
    url: 'https://job-search-api1.p.rapidapi.com/v1/job-description-search',
    params: {
      q: `${jobname}`,
      page: '1',
      country: 'us',
      city: 'Seattle'
    },
    headers: {
      'x-rapidapi-key': '81c0752aabmshd6f144b0b338b61p1ea32ejsn9eedaf578ced',
      'x-rapidapi-host': 'job-search-api1.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
  
}

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
                 <button className='search-btn' onClick={()=>searchJob(jobTittle)}><i class="ri-find-replace-line"></i></button>
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
