import React,{ useEffect , useState  }  from 'react'
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import "./Main.css"
import Axios from "axios";
import io from "socket.io-client";
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'
import axios from 'axios';
const socket = io.connect("http://localhost:3002");//socket.io on 3002


var contactID;
var clicked=false;
//default logged in user
var loggedinUser={
  idUSER: (0),
  USER_phone_number: (''),
  USER_name: '',
  USER_decription: '',
  USER_pic: null,
  USER_online_status: (0),
  USER_privacy: null
} ;

function Main() {
  

  //GETT all messages in a list from DB
  const [messages, setMessages] = useState([]);
  const [personalMessages, setpersonalMessages] = useState([]);
  const [userClicked, setuserClicked] = useState(false);
  const [groups, setGroups] = useState([]);
  const [groupchat, setGroupchat] = useState([]);


  //display all the messages of ths clicked user
    const displayMessages= (userId)=>{
      console.log("clicked user = ",contactID);
      Axios.get("http://localhost:3001/messages").then((response) => {
          setpersonalMessages(response.data);
        });
      contactID=userId;
      clicked=true;
      // socket.emit("user_clicked",contactID);
}
    useEffect(() => {
      socket.emit("join_room",1); 
      Axios.get("http://localhost:3001/allmessages").then((response) => {
        setMessages(response.data);
      });
    }, []);

    useEffect(() => {
      socket.emit("join_room",1); 
      Axios.get("http://localhost:3001/groups").then((response) => {
        setGroups(response.data);
      });
    }, []);

  //GETT all USERS in a list to display on sidebar
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUserList(response.data);
      
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/groupchat").then((response) => {
      setGroupchat(response.data);
      
    });
  }, []);

  //gets the logged in user details
  useEffect(()=>{
        Axios.get("http://localhost:3001/setloggedin").then((response)=>{
        loggedinUser=response.data[0];
        console.log("logged in was set in Main.js",loggedinUser);
      });
  },[])

//----------------------------------------------------------

    const logout_user = () =>{
        axios.post('http://localhost:3001/logout',
        {
            USERid: loggedinUser.idUSER,
        })
        .then(res=>{
            console.log(res.data)
          })
    }

//-----------------

  return (
    <div className='main'> 
        <div className="Main__body">
        <Sidebar displayMessages={displayMessages} userList={userList} loggedinUser={loggedinUser}/>
        <Chat groups={groups} groupchat={groupchat} messages={messages} clicked={clicked} displayMessages={displayMessages} loggedinUser={loggedinUser} personalMessages={personalMessages} userList={userList} contactID={contactID} socket={socket}/>
        </div> 
        <div className='logout'>
          <Button onClick={logout_user}>
            <Link to = "/landing">
              logout
            </Link>
          </Button> 
        </div>
    </div>
  )
}

export default Main