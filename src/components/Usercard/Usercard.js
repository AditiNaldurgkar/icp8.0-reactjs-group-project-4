import React from 'react'
import "./Usercard.css"
import { jobNames } from '../../config/searchData'

const randonJobname =()=>{
     return jobNames[Math.floor(Math.random()*jobNames.length)]
}


const Usercard = ({user}) => {

    const {dob,cell,email,gender,name,login,phone,picture,location} = user
  return (
    <div className='user-info-card'>
       <div className='user-card-top'>
          <div className='usercard-image'>
             <img src={picture.medium}></img>
          </div>
          <div className='card-user-info'>
             <span className='user-card-name'>{`${name.first} ${name.last} .`}<span className='user-card-username'>@{login.username}</span></span>
             <span className='job-info'>{randonJobname()}</span>
          </div>
       </div>
       <div className='user-card-bottom'>
          <div className='card-basic-info'>
             <span> <i class="ri-cake-fill"></i>:{dob.age-10}</span>
             <span><i class="ri-map-pin-2-fill"></i>:{(location.city).split(" ")[0]}</span>
             <span>{gender == "male" ? <i class="ri-men-fill"></i> : <i class="ri-women-fill"></i>}</span>
          </div>
           <div className='card-btn-container'>
              <button className='job-btn'>add to circle</button>
           </div>
       </div>
    </div>
  )
}

export default Usercard
