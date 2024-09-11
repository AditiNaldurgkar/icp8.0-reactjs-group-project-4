import React from 'react'
import "./popup.css"
import toast from 'react-hot-toast'

const Passpopup = () => {
  return (
    <div className='pop-body'>
        <input type='text' placeholder='enter your password' className='seting-in'></input>     
        <input type='text' placeholder='enter your password' className='seting-in'></input>
        <button className='job-btn'>update password</button>
        <span className=' chng-note note'><i class="ri-alarm-warning-fill"></i> next time login with new password</span>
    </div>
  )
}

export {Passpopup}
