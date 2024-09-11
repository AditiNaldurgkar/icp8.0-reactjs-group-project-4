import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './setting.css'
import BoyProfileImg from './boy-profile-pic.svg'
import './toggle.css'

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
      <div className='theam-setting'>
           <span className='setting-heading'>theme</span>
           <div className='them-btn-container'>
             <span> <i class="ri-moon-clear-fill"></i> Dark mode</span>
                  <div>
                     <label className="switch">
                     <input type="checkbox"></input>
                     <span className="slider round"></span>
                    </label>
                  </div>
           </div>
      </div>

      </div>
  </>
  )
}

export default Setting
