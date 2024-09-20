import React from 'react'
import "./Chatscreen.css"

const Chatscreen = ({user , chatscreen}) => {
  return (
    <div  className='main-chat-container'>
          <div className='chat-screen'>
             <div className='chat-user-info'>
                <span className='back-arrow' onClick={()=>chatscreen(false)}><i class="ri-arrow-left-line"></i></span>
                 <div className='user-pic usercard-image'>
                   <img src={user.url}></img>
                </div>
                <div className='chat-open-user-info'>
                     <span className='chat-open-user-name chat-name'>{`${user.first_name} ${user.last_name}`}</span>
                     <span className='user-work-info'>{user.role}</span>
                </div>
             </div>
          </div>
    </div>
  )
}

export default Chatscreen
