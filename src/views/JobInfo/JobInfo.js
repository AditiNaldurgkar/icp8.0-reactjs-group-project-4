import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import './jobinfo.css'
import toast from 'react-hot-toast'

function Jobinfo() {
 

  
 const navigate = useNavigate()


 const savejob =()=>{
    try {
           let savedjobs = JSON.parse(localStorage.getItem('appliedjobs')) || []
           savedjobs.unshift(result)
           localStorage.setItem('appliedjobs',JSON.stringify(savedjobs))
           toast.success('applied successfully...')
           navigate('/search')
    } catch (error) {
       toast.error(error)
    }
 }


  // get date
  const getaddDate = (date) => {
    let adddate = date.split("T")
    return (adddate[0])
  }

  // finding job on local storaeg
  const ALL_JOBS = JSON.parse(localStorage.getItem('searchedJobs'))
  const { id } = useParams()
  let result = ALL_JOBS.filter((JOB) => { return (JOB.id === id) });
  result = result[0]
  console.log(result)


  return (<>
    <Sidebar />
    <div className='jobs-info-container'>
      <Link to='/search' className='link'><span className='back-btn'><i class="ri-arrow-left-line"></i></span></Link>
      <div className='job-tittle-info'>
        <h2 className='liner-text job-tittle'>{result.company.display_name}</h2>
        <span>#{result.category.tag}</span>
      </div>
      <div className='job-discription-info'>
        {result.description}
      </div>
      <div className='company-info'>
        <h4 className='liner-text'>know more</h4>
        <div className='job-all-info'>
          <span className='info-text'><i class="ri-map-pin-add-fill"></i> Location : {result.location.area[0]}</span>
          <span className='info-text'><i class="ri-time-fill"></i> Add on : {getaddDate(result.created)}</span>
          <span className="job-info"><i class="ri-currency-fill"></i> MIN-SALARAY : {result.salary_min} $</span>
          <span className="job-info"><i className="ri-arrow-right-up-line"></i> MAX-SALARAY : {result.salary_max} $</span>
          <span className='job-info'><a target='__blank' href={`${result.redirect_url}`}>check more</a></span>
        </div>
      </div>
      <button className="apply-btn" onClick={()=>{savejob(result)}}>apply now</button>
      <span className='note'><i class="ri-alarm-warning-fill"> </i> please read all information before apply.</span>
    </div>
    <div className='Show'></div>
  </>
  )
}

export default Jobinfo