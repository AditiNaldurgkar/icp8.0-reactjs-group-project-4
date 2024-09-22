import React, { useEffect, useState } from 'react'
import "./Chatscreen.css"
import { Usermsg ,Recmsg } from '../MsgStyles/Msgstyle'
import { ANSWERS } from '../../config/ChatsData'


const Chatscreen = ({ user, chatscreen }) => {


  const [Message ,setmsg] =useState("")
  const [chat,setchat] = useState([])

 const handleinput =(e)=>{
   setmsg(e.target.value)
 }

  const addmessages =(msg,type)=>{
      setchat(prevChat => [...prevChat, { Message: msg, sender: type }])
      //console.log(chat)
         setmsg('')

  }


    const answer =()=>{
      let reply = ""
       let answers = ANSWERS.filter(ans=>ans.que.includes(Message))[0]
       if(answers){
         reply= answers.reply
       }else{
        reply="hey i cant find any thing..."
       }
      addmessages(reply,"reciever")
    }


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
            <span className='user-work user-work-info'>{user.role}</span>
          </div>

        </div>
        <div className='main-chat-div'>
            {/*add chaing here.....*/ }
             
              {
                 chat.map((msg,index)=>(
                  <>
                  {msg.sender=== "user" ? <Usermsg text={msg.Message} key={index}/> : <Recmsg key={index} text={msg.Message}/>}
                  </>
              ))
              }
            
        </div>
        <div className='input-div'>
          <input
            className='search-input'
            type='text'
            value={Message}
            onChange={handleinput}
            >
          </input>
          <button className='send-btn search-btn' disabled={!Message.trim()} onClick={()=>{addmessages(Message,"user")
            answer()
          }} ><i class="ri-send-plane-fill"></i></button>
        </div>
      </div>
      <div className='Show'></div>
    </div>
  )
}

export default Chatscreen