import React from 'react'
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import "./Main.css"

function Main() {
  return (
    <div className='main'>
        <div className="Main__body">
        <Sidebar />
        <Chat />
        </div>  
    </div>
  )
}

export default Main