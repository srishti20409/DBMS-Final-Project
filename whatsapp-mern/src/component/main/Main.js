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

  var loggedinUser={
    idUSER: 1,
    USER_phone_number: '9717807100',
    USER_name: 'ritick',
    USER_decription: 'HAF',
    USER_pic: null,
    USER_online_status: 0,
    USER_last_seen: null,
    USER_privacy: null
  } ;
    
    const displayMessages= (userId)=>{
      console.log("clicked user = ",contactID);
      Axios.get("http://localhost:3001/messages").then((response) => {
          setpersonalMessages(response.data);
        });
      contactID=userId;
      // socket.emit("user_clicked",contactID);
    }
    useEffect(() => {
      socket.emit("join_room",1);
      
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

  useEffect(()=>{
        Axios.get("http://localhost:3001/setloggedin").then((response)=>{
        loggedinUser=response.data;
        console.log("logged in was set in Main.js",loggedinUser);
      });
  },[])


//----------------------------------------------------------

  return (
    <div className='main'>
        
        <div className="Main__body">
        
        <Sidebar displayMessages={displayMessages} userList={userList} loggedinUser={loggedinUser}/>
        
        <Chat messages={messages} displayMessages={displayMessages} loggedinUser={loggedinUser} personalMessages={personalMessages} userList={userList} contactID={contactID} socket={socket}/>
        </div>  
    </div>
  )
}

export default Main