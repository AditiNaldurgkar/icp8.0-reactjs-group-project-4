import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './search.css'

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
             </div>
        </div>
    </div>
  )
}

export default Search
