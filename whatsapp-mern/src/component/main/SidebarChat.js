import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'
import { View} from "react";

function SidebarChat(props) {
  const displayMessage=()=>{
    props.displayMessages(props.val.idUSER);
  }
  return (
    <div className='sidebarChat' onClick={displayMessage}>
        <Avatar src={props.val.USER_pic}/>
        <div className="sidebarChat__info">
            <h2>{props.val.USER_name}</h2>
            <p>
              {(() => {
                switch (props.val.USER_privacy) {
                  case 1:   return <p>status : {props.val.USER_online_status}</p>;
                  default:      return "status : private";
                }
              })()} 
            </p>
        </div>
    </div>
  )
  }

export default SidebarChat