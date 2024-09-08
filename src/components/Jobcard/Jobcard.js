import React from 'react'

const Jobcard = ({jobInfo}) => {
  return (
    <div>
       {console.log(jobInfo)}
       <h1>{jobInfo.company.display_name}</h1>
    </div>
  )
}
//jobInfo.company.display_name


export default Jobcard
