import React from 'react'
import { useEffect , useState } from 'react';
import Axios from 'axios';
import Cell from './Cell';
import "./style.css";
import { Link } from 'react-router-dom';

function List
() {
    
    const [MemberList, setMemberList] = useState([]);
    {console.log(MemberList)}
    const [userList, setUserList] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:3001/users").then((response) => {
        setUserList(response.data); 
      });
    }, []);

    return (
        <div className='Body'>
            <div className="List">
                {userList.map((val,key)=>
                {
                    return(<Cell val={val} MemberList={MemberList}/>)
                })
                }

                <div className="create">
                        <button>
                        <Link to = "/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Create</Link>
                        </button>
                </div>
            </div>
            
        </div>
    )
}

export default List
