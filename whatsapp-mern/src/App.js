import React from "react";
//import "./App.css";
import Form from "./component/login/Form";
import {BrowserRouter as Router ,Routes,  Route} from 'react-router-dom'
import Main from "./component/main/Main.js"
import Login from "./component/login/login";
import io from 'socket.io-client'
//const socket = io.connect("http://localhost:3001")
function App() {
  return (
    <div>
      
        <Routes>
          <Route exact path= '/' element={<Main/>}/>
          <Route exact path= '/form' element={<Form/>}/>
          <Route exact path = '/login' element={<Login/>}/>
        </Routes>
      
      {/* <Route exact path = "/form" component={Form}/> */}
      
  </div>    
  );
}

export default App;
