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

var clickedContact;
var clicked = false;
var loggedinUser=1;
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
        SENDER_id: loggedinUser,
        RECIVER_id: clickedContact.idUSER,
        text: message,
        sent_time:new Date(Date.now()).toISOString().split('T')[0]+" "+new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),
        displayed: false,
      };
      await props.socket.emit("send_message",messageData);
      props.displayMessages(messageData.RECIVER_id);
      messageData.displayed=true;
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
      
      props.displayMessages(data.RECIVER_id);
      
      setMessageList((list) => [...list, data]);
      
      console.log("a message was recieved");
    });
  }, [props.socket]);

  useEffect(()=>{
   
    loggedinUser = props.loggedinUser.idUSER;

  },[props.loggedinUser])

  useEffect(()=>{
    clicked=props.clicked;
  },[props.clicked]);

  console.log("VALUE OF LOGGED IN USER = ",props.loggedinUser);

  //----------------------------------------------------------
    var header=<div className="chat__header">
    <IconButton>
      <Avatar />
    </IconButton>
    <div className="chat__headerInfo">
      <h3>Name</h3>
      <p> last seen at...</p>
    </div>

    <div className="chat__headerRight">
      <IconButton>
        <SearchOutlined />
      </IconButton>
    </div>
  </div>;

  if(clicked==true){
    props.userList.map((val)=>{
      if(val.idUSER==props.contactID){
        clickedContact=val;
      }
    })
    header = <div className="chat__header">
    <IconButton>
      <Avatar />
    </IconButton>
    <div className="chat__headerInfo">
      <h3>{clickedContact.USER_name}</h3>
      <p> lasst seen at...</p>
    </div>

    <div className="chat__headerRight">
      <IconButton>
        <SearchOutlined />
      </IconButton>
    </div>
  </div>
  }

  return (
    
    <div className="chat">
     
      {header}

      <div className="chat__body">

        {props.personalMessages.map((val,key)=>{
          
          {clicked=true;
            props.userList.map((v,k)=>{
              if(props.contactID==v.idUSER){
                clickedContact = v;
              }
            })
            
            var attach = <img src=""/>
            
            if(val.ATTACHMENT!=null && !val.ATTACHMENT.includes("youtube")){
              console.log("attaching somethingg");
              attach = <img src={val.ATTACHMENT} alt="IMAGE"/>
            }
            
            else if(val.ATTACHMENT!=null){
              //its a video
              attach=<iframe width="560" height="315" src={val.ATTACHMENT} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            }
          if(val.SENDER_id==loggedinUser && val.RECIVER_id==props.contactID)
          {
            clicked=true;
            props.userList.map((v,k)=>{
              if(props.contactID==v.idUSER){
                clickedContact = v;
              }
            })
          return(<p key={val.idMESSAGE} className="chat__message chat__reciever">
          <span className="chat__name"></span>
          {val.text}
          {attach}
          <span className="chat__timestamp">{val.sent_time}</span>
          
          </p>)}

          else if(val.SENDER_id==props.contactID){
            clicked=true;
          props.userList.map((v,k)=>{
            if(props.contactID==v.idUSER){
              clickedContact = v;
            }
          })
          return(<p key={val.idMESSAGE} className="chat__message">
          <span className="chat__name">{clickedContact.USER_name}</span>
          {val.text}
          {attach}
          <span className="chat__timestamp">{val.sent_time}</span>
        </p>)
        }}
        })}


        {/* {messageList.map((val,key)=>{
          
          {if(val.SENDER_id==loggedinUser && val.RECIVER_id==props.contactID)
          {val.displayed=true;
          return(<p key={val.idMESSAGE} className="chat__message chat__reciever">
          <span className="chat__name">{val.SENDER_id}</span>
          {val.text}
          <span className="chat__timestamp">{val.sent_time}</span>
        </p>)}
        else if( val.SENDER_id==props.contactID){
          val.displayed=true;
          props.userList.map((v,k)=>{
            if(props.contactID==v.idUSER){
              clickedContact = v;
            }
          })
          return(<p key={val.idMESSAGE} className="chat__message">
          <span className="chat__name">{clickedContact.USER_name}</span>
          {val.text}
          <span className="chat__timestamp">{val.sent_time}</span>
        </p>)
        }}
        })}  */}
      

      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <IconButton >
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
