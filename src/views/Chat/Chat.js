import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Chat.css"
import serchImg from "./searchImg.png"
import Chatprofile from '../../components/Chatprofile/Chatprofile'

const Chat = () => {

  const USERCIRCLE = JSON.parse(localStorage.getItem("USERCIRCLE")) || []

  return (
    <>
    <Sidebar/>
    <div className='chats-container'>
        <h1 className='liner-text user-heading'>my circle</h1>
      <div className='all-chats'>
      {USERCIRCLE.length==0?<span className='user-serch-img'><img src={serchImg}></img></span>:
                       USERCIRCLE.map((user ,index)=>(
                            <Chatprofile key={index} user={user}/> 
                       ))
                }
      </div>
      <div className='Show'></div>
    </div>
    </>
  )
}

export default Chat
