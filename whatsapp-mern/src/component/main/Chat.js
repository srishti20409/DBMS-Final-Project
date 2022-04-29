import { Avatar, IconButton } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import SearchOutlined from "@mui/icons-material/Search";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import React, { useState } from "react";
import "./Chat.css";
import Axios from "axios";

// const [chat , setChat] = useState('');
// const [datetime , setDate] = useState('');
// const [ ]
// const [date , setDate] = use

// const sendMessage = () =>{

// }
const loggedinUser = 4;

function Chat(props) {
 //----------------------------TAKING message input on chat and sending to backend------------ 
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    const ci = props.contactID;
    console.log("AAAAAAAAAAAAAAAAAA     "+ci);
    Axios.post("http://localhost:3001/create", {
      message: message,
      loggedinUser: loggedinUser,
      contactID: ci,
    }).then(() => {
      console.log("successsss");
    });
  };

  //----------------------------------------------------------
  return (
    <div className="chat">
      <div className="chat__header">
        <IconButton>
          <Avatar />
        </IconButton>
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p> lasst seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">

        {props.messages.map((val,key)=>{
          
          {if(val.SENDER_id==loggedinUser && val.MESSAGE_RECIVER_id==props.contactID)
          {
          return(<p key={val.idMESSAGE} className="chat__message chat__reciever">
          <span className="chat__name">{val.sender_id}</span>
          {val.MESSAGE_text}
          <span className="chat__timestamp">{val.MESSAGE_sent_time}</span>
        </p>)}
        else if(val.SENDER_id==props.contactID){
          var contactName;
          props.userList.map((v,k)=>{
            if(props.contactID==v.idUSER){
              contactName = v.USER_name;
            }
          })
          return(<p key={val.idMESSAGE} className="chat__message">
          <span className="chat__name">{contactName}</span>
          {val.MESSAGE_text}
          <span className="chat__timestamp">{val.MESSAGE_sent_time}</span>
        </p>)
        }}
        })}
      

      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <IconButton>
          <AttachFile />
        </IconButton>
        <form>
          <input
            placeholder="Type a message"
            type="text"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <button type="submit" onClick={sendMessage}>
            Send message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
