import React, { useEffect } from 'react'
import "./Chatscreen.css"
import axios from 'axios'
import { json } from 'react-router-dom'



const Chatscreen = ({ user, chatscreen }) => {




  return (
    <div className='main-chat-container'>
      <div className='chat-screen'>
        <div className='chat-user-info'>
          <span className='back-arrow' onClick={() => chatscreen(false)}><i class="ri-arrow-left-line"></i></span>
          <div className='user-pic usercard-image'>
            <img src={user.url}></img>
          </div>
          <div className='chat-open-user-info'>
            <span className='chat-open-user-name chat-name'>{`${user.first_name} ${user.last_name}`}</span>
            <span className='user-work-info'>{user.role}</span>
          </div>

        </div>
        <div className='main-chat-div'></div>
        <div className='input-div'>
          <input
            className='search-input'
            type='text'>
          </input>
          <button className='send-btn search-btn' ><i class="ri-send-plane-fill"></i></button>
        </div>
      </div>
      <div className='Show'></div>
    </div>
  )
}

export default Chatscreen
