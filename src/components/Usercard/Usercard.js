import React from 'react'
import "./Usercard.css"
import { jobNames } from '../../config/searchData'

const randonJobname =()=>{
     return jobNames[Math.floor(Math.random()*jobNames.length)]
}


const Usercard = ({user}) => {

    const {dob,cell,email,gender,name,login,phone,picture} = user
  return (
    <div className='user-info-card'>
       <div className='user-card-top'>
          <div className='usercard-image'>
             <img src={picture.medium}></img>
          </div>
          <div className='card-user-info'>
             <span className='user-card-name'>{`${name.first} ${name.last} .`}<span className='user-card-username'>@{login.username}</span></span>
             <span>{randonJobname()}</span>
          </div>
       </div>
    </div>
  )
}

export default Usercard
