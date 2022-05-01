import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'


function SidebarChat(props) {
  const displayMessage=()=>{
    props.displayMessages(props.val.idUSER);
  }
  return (
    <div className='sidebarChat' onClick={displayMessage}>
        <Avatar src={props.val.USER_pic}/>
        <div className="sidebarChat__info">
            <h2>{props.val.USER_name}</h2>
            <p>This is the user id {props.val.idUSER}</p>
        </div>
    </div>
  )
  }

export default SidebarChat