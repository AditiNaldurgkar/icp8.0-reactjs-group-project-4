import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './setting.css'
import BoyProfileImg from './boy-profile-pic.svg'

const Setting = () => {
  return (
    <>
      <Sidebar/>
      <div className='setting-container'>
      <span className='liner-text set-txt' >Settings</span>
      <div className='setting-user-profile'>
          <span className='setting-profile-pic'>
             <img src={BoyProfileImg}></img>
          </span>
        <span className='user-info'>
             <div>Sarthak Navale<i class="ri-arrow-right-s-line"></i></div>
             <div className='setting-user-name'>@sarthak</div>
        </span>
      </div>
      </div>
  </>
  )
}

export default Setting
