import React from "react";
//import "./App.css";
import {BrowserRouter as Router ,Routes,  Route} from 'react-router-dom'
import Main from "./component/main/Main.js"
import Landingpage from "./component/login/Landingpage";
import Register from "./component/login/Register";
import Login from "./component/login/Login";
import Create_Group from "./component/Groups/Create_Group.js";
import List
 from "./component/Groups/List.js";
import io from 'socket.io-client'
//const socket = io.connect("http://localhost:3001")
function App() {
  return (
    <div>
      
        <Routes>
          <Route exact path= '/' element={<Main/>}/>
          <Route exact path= '/landing' element={<Landingpage/>}/>
          <Route exact path= '/register' element={<Register/>}/>
          <Route exact path= '/login' element={<Login/>}/>
          <Route exact path= '/creategroup' element = {<Create_Group/>}/>
          <Route exact path="/list" element = {<List/>}/>
        </Routes>
      
      {/* <Route exact path = "/form" component={Form}/> */}
      
  </div>    
  );
}

export default App;
