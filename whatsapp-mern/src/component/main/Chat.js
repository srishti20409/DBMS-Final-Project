import { Avatar, IconButton } from '@mui/material'
import {AttachFile} from '@mui/icons-material'
import SearchOutlined from '@mui/icons-material/Search'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import MicIcon from '@mui/icons-material/Mic'
import React, { useState } from 'react'
import "./Chat.css"


// const [chat , setChat] = useState('');
// const [datetime , setDate] = useState('');
// const [ ]
// const [date , setDate] = use

// const sendMessage = () =>{

// }


function Chat() {
  return (
    <div className='chat'>
        <div className="chat__header">
            <IconButton>
                <Avatar />
            </IconButton>
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p> lasst seen at...</p>
            </div>

            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
            </div>
        </div>

        <div className="chat__body">
            
            <p className='chat__message'>
                <span className="chat__name">Sonny</span>
                This is a message

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
            <p className='chat__message'>
                <span className="chat__name">Sonny</span>
                This is a message

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
            <p className='chat__message chat__reciever'>
                <span className="chat__name">Sonny</span>
                This is a message

                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
        </div>
        <div className="chat__footer">
            <InsertEmoticonIcon />
            <IconButton>
                    <AttachFile />
            </IconButton>
            <form>
                
                <input placeholder='Type a message' type='text'/>
                <button type='submit'>Send message</button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default Chat