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
      <div className='setting-box'>
           <span className='setting-heading'>theme</span>
           <div className='them-btn-container'>
             <span className='seting-name'> <i class="ri-moon-clear-fill"></i> Dark mode</span>
                  <div>
                     <label className="switch">
                     <input type="checkbox"></input>
                     <span className="slider round"></span>
                    </label>
                  </div>
           </div>
      </div>

      
      <div className='setting-box'>
           <span className='setting-heading'>profile</span>
           <div className='user-set-box'>
             <div className='seting-name'><i className="ri-group-fill"></i> edit profile  <i class="ri-arrow-drop-right-line"></i></div>
             <div className='seting-name'><i class="ri-key-2-fill"></i> change password  <i class="ri-arrow-drop-right-line"></i></div>
           </div>
      </div>


      <div className='setting-box'>
           <span className='setting-heading'>notification</span>
           <div className='them-btn-container'>
             <span className='seting-name'> <i class="ri-notification-fill"></i> notification</span>
                  <div>
                     <label className="switch">
                     <input type="checkbox"></input>
                     <span className="slider round"></span>
                    </label>
                  </div>
           </div>
      </div>



      <div className='setting-box'>
           <span className='setting-heading'>searches</span>
           <div className='them-btn-container'>
             <span className='seting-name'> <i class="ri-notification-fill"></i> result no.</span>
                  <div>
                      <input type='number' className='serhces-res-box'></input>
                  </div>
           </div>
      </div>

      </div>
  </>
  )
}

export default Setting
