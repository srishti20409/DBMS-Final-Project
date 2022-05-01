import React,{ useEffect} from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton, Link } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from "./SidebarChat";
import AddIcon from '@mui/icons-material/Add';
// import { Link } from "react-router-dom";

function Sidebar(props) {
  
  const loggedinUser = 4;
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          <Avatar src="https://avatars.githubusercontent.com/u/20063?v=4" />
        </IconButton>
        <div className="sidebar__headerRight">
          <IconButton href="http://localhost:3000/creategroup"  rel="noopener noreferrer">
            <AddIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon />
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
          {
            if(val.idUSER!=loggedinUser)
            return(<SidebarChat val={val} displayMessages={props.displayMessages}/>)
          })
          }

      </div>
    </div>
  );
}

export default Sidebar;
