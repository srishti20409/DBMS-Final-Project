import React,{ useEffect } from 'react'
import SidebarChat from './SidebarChat'

function Usrlist(props) {
  
    const loggedinUser = 4;
    const [userList, setUserList] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:3001/users").then((response) => {
        setUserList(response.data);
        
      });
    }, []);
    props = displayMessages={displayMessages}, userList={userList};

  return (
    <div>userlist
        <div className="sidebar__chats">
          {props.userList.map((val,key)=>
          {
            if(val.idUSER!=loggedinUser)
            return(<SidebarChat val={val} displayMessages={props.displayMessages}/>)
          })
          }
      </div>
    </div>
  )
}

export default Usrlist


