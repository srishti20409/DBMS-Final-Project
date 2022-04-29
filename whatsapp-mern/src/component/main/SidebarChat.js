import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'


function SidebarChat(props) {
  const displayMessage=()=>{
    console.log("Inidebar chaattt");
    props.displayMessages(props.val.idUSER);
  }
  return (
    <div className='sidebarChat' onClick={displayMessage}>
        <Avatar src={props.val.USER_pic}/>
        <div className="sidebarChat__info">
            <h2>{props.val.USER_name}</h2>
            <p>This is the last message</p>
        </div>
    </div>
  )
  }

export default SidebarChat