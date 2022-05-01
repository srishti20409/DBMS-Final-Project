import React,{ useEffect} from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton, Link } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from "./SidebarChat";
import AddIcon from '@mui/icons-material/Add';
// import { Link } from "react-router-dom";
var loggedinUser;
var userloggedin = false;
function Sidebar(props) {
  
  useEffect(()=>{
    
    loggedinUser = props.loggedinUser.idUSER;
    userloggedin=true;
    console.log("inside sidebar ",loggedinUser);
  },[props.loggedinUser])

  {if(userloggedin==true){return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          <Avatar src="https://avatars.githubusercontent.com/u/20063?v=4" />
        </IconButton>
        <p style ={{color: 'white'}}>{props.loggedinUser.USER_name}</p>
        <div className="sidebar__headerRight">
          <IconButton href="http://localhost:3000/creategroup"  rel="noopener noreferrer">
            <AddIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
          <div className="sidebar__searchContainer">
              <SearchOutlinedIcon />
              <input placeholder="Search or start new chat" type="text" />
          </div>
      </div>
      
      <div className="sidebar__chats">
          
          {props.userList.map((val,key)=>
          
          { console.log("helloooo ",loggedinUser);
            if(val.idUSER!=props.loggedinUser.idUSER)
            return(<SidebarChat val={val} displayMessages={props.displayMessages}/>)
          })
          
          }

      </div>
    </div>
  );}}
}

export default Sidebar;
