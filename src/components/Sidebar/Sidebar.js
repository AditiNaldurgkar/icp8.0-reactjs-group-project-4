import React from 'react'
import './sidebar.css'


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
       <ul className='icon-list'>
          <li className='sidebar-iteams'><i class="ri-home-8-line"></i></li>
          <li className='sidebar-iteams'><i class="ri-search-eye-line"></i></li>
          <li className='sidebar-iteams'><i class="ri-home-fill"></i></li>
          <li className='sidebar-iteams'><i class="ri-account-circle-line"></i></li>
          <li className='sidebar-iteams'><i class="ri-settings-5-line"></i></li>
       </ul>
    </div>
  )
}

export default Sidebar
