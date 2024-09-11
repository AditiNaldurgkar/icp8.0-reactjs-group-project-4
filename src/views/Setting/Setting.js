import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './setting.css'
import BoyProfileImg from './boy-profile-pic.svg'
import './toggle.css'
import { Passpopup ,Profilepopup} from '../../components/popup/Popup'
import toast from 'react-hot-toast'

const Setting = () => {

  const [popup,setpopup] = useState(false)
  const [opration , setopration] = useState(``)
  const [serchresultNumber,setSerchresultNumber] = useState(18)

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
             <div className='seting-name' onClick={()=>{
              setpopup(true) 
              setopration("chng-profile")
              }}><i className="ri-group-fill"></i> edit profile  <i class="ri-arrow-drop-right-line"></i></div>
             <div className='seting-name' onClick={()=>{setpopup(true)
              setopration("chng-passs")
             }}><i class="ri-key-2-fill"></i> change password  <i class="ri-arrow-drop-right-line"></i></div>
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
                      <input type='number' className='serhces-res-box'  value={serchresultNumber} ></input>
                  </div>
           </div>
      </div>
    
      <div className='setting-box'>
            <span className='log-out'><i class="ri-arrow-left-fill"></i> log out</span>
      </div>

          {popup ? <div className='overlay'>
              { opration === "chng-passs" ? <Passpopup/> : <Profilepopup/>}
        <span className='close-popup' onClick={()=>{setpopup(false)}}><i class="ri-close-line"></i></span>
        </div>:null}
    </div>
  </>
  )
}

export default Setting
