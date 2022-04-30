import React,{ useEffect }  from 'react'
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import "./Main.css"
import Axios from "axios";
import { useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3002");//socket.io on 3002
var contactID;
function Main() {

  //GETT all messages in a list from DB
  const [messages, setMessages] = useState([]);
  const [personalMessages, setpersonalMessages] = useState([]);
  const [userClicked, setuserClicked] = useState(false);

  const loggedinUser = 4;
    
    const displayMessages= (userId)=>{
      console.log("inside main getting messages ",userId);
      console.log("clicked use = ",contactID);
      Axios.get("http://localhost:3001/messages").then((response) => {
          setpersonalMessages(response.data);
          
        });
      contactID=userId;
      // socket.emit("user_clicked",contactID);
    }
    useEffect(() => {
      socket.emit("join_room",4)
      Axios.get("http://localhost:3001/allmessages").then((response) => {
        setMessages(response.data);
      });
    }, []);

  //GETT all USERS in a list to display on sidebar
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUserList(response.data);
      
    });
  }, []);


//----------------------------------------------------------

  return (
    <div className='main'>
        
        <div className="Main__body">
        
        <Sidebar displayMessages={displayMessages} userList={userList}/>
        
        <Chat messages={messages} personalMessages={personalMessages} userList={userList} contactID={contactID} socket={socket}/>
        </div>  
    </div>
  )
}

export default Main