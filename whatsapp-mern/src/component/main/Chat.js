import { Avatar, IconButton } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import SearchOutlined from "@mui/icons-material/Search";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import React, { useState ,useEffect} from "react";
import "./Chat.css";
import Axios from "axios";

// const [chat , setChat] = useState('');
// const [datetime , setDate] = useState('');
// const [ ]
// const [date , setDate] = use

// const sendMessage = () =>{

// }
const loggedinUser = 4;
var clickedContact;
function Chat(props) {
 //----------------------------TAKING message input on chat and sending to backend------------ 
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  
  const sendMessage = async () =>  {
    let len = props.messages.length;
    let lastmessage = props.messages[len-1];
    let lastmessageId = lastmessage.idMESSAGE;
    if(messageList.length>=1 && messageList[messageList.length-1].idMESSAGE>=lastmessageId){
      lastmessageId=messageList[messageList.length-1].idMESSAGE;
    }
    if(message!==""){
      const messageData = {
        idMESSAGE: lastmessageId+1,
        MESSAGE_SENDER_id: loggedinUser,
        MESSAGE_RECIVER_id: props.contactID,
        MESSAGE_text: message,
        MESSAGE_sent_time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),
      };
      await props.socket.emit("send_message",messageData);
      setMessageList((list) => [...list, messageData]);
      setMessage("");
    }
  };
  // useEffect(()=>{
  //   props.socket.on("user_clickedd",(data)=>{
  //     console.log("user clicked = ",data);
  //     contactID = data;
  //     clicked = true;
  //   })
  // })
  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      console.log("a message was recieved");
      setMessageList((list) => [...list, data]);
    });
  }, [props.socket]);

  //----------------------------------------------------------
  
  return (
    
    <div className="chat">
     
      <div className="chat__header">
        <IconButton>
          <Avatar />
        </IconButton>
        <div className="chat__headerInfo">
          <h3>NAME</h3>
          <p> lasst seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">

        {props.personalMessages.map((val,key)=>{
          
          {
            if(val.MESSAGE_SENDER_id==loggedinUser && val.MESSAGE_RECIVER_id==props.contactID)
          {
          return(<p key={val.idMESSAGE} className="chat__message chat__reciever">
          <span className="chat__name">{val.MESSAGE_SENDER_id}</span>
          {val.MESSAGE_text}
          <span className="chat__timestamp">{val.MESSAGE_sent_time}</span>
        </p>)}
        else if(val.MESSAGE_SENDER_id==props.contactID){
          
          props.userList.map((v,k)=>{
            if(props.contactID==v.idUSER){
              clickedContact = v;
            }
          })
          return(<p key={val.idMESSAGE} className="chat__message">
          <span className="chat__name">{clickedContact.USER_name}</span>
          {val.MESSAGE_text}
          <span className="chat__timestamp">{val.MESSAGE_sent_time}</span>
        </p>)
        }}
        })}


        {messageList.map((val,key)=>{
          
          {if(val.MESSAGE_SENDER_id==loggedinUser && val.MESSAGE_RECIVER_id==props.contactID)
          {
          return(<p key={val.idMESSAGE} className="chat__message chat__reciever">
          <span className="chat__name">{val.MESSAGE_SENDER_id}</span>
          {val.MESSAGE_text}
          <span className="chat__timestamp">{val.MESSAGE_sent_time}</span>
        </p>)}
        else if(val.MESSAGE_SENDER_id==props.contactID){
          
          props.userList.map((v,k)=>{
            if(props.contactID==v.idUSER){
              clickedContact = v;
            }
          })
          return(<p key={val.idMESSAGE} className="chat__message">
          <span className="chat__name">{clickedContact.USER_name}</span>
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
        
          <input
            value={message}
            placeholder="Type a message"
            type="text"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <button type="submit" onClick={sendMessage}>
            Send message
          </button>
        
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
