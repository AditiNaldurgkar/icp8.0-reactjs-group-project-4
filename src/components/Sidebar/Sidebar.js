import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <ul className='icon-list'>
        <Link to="/" className='link'><li className='sidebar-iteams'><i className="ri-home-8-line"></i></li></Link>
        <Link to="/search" className='link'><li className='sidebar-iteams'><i className="ri-search-eye-line"></i></li></Link>
        <Link to="/news" className='link'>  <li className='sidebar-iteams'><i class="ri-newspaper-fill"></i></li></Link>
        <Link to="/userprofile" className='link'> <li className='sidebar-iteams'><i className="ri-account-circle-line"></i></li> </Link>
        <Link to="/setting" className='link'><li className='sidebar-iteams'><i className="ri-settings-5-line"></i></li></Link>
      </ul>
    </div>
  )
}

export default Sidebar
