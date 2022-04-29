import React,{ useEffect }  from 'react'
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import "./Main.css"
import Axios from "axios";
import { useState } from "react";
var contactID;
function Main() {
  // function refreshPage() {
  //   window.location.reload(false);
  // }
  //GETT all messages in a list from DB
  const [messages, setMessages] = useState([]);
  const loggedinUser = 4;
    
    const displayMessages=(userId)=>{
        Axios.get("http://localhost:3001/messages").then((response) => {
          setMessages(response.data);
        });

      console.log(messages);
      //console.log(contactID);
      contactID=userId;
    }

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
        
        <Chat messages={messages} userList={userList} contactID={contactID}/>
        </div>  
    </div>
  )
}

export default Main