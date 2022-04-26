import React from "react";
//import "./App.css";
import Form from "./component/login/Form";
import {BrowserRouter as Router ,Routes,  Route} from 'react-router-dom'
import Main from "./component/main/Main.js"

function App() {
  return (
    <div>
      
        <Routes>
          <Route exact path= '/' element={<Main/>}/>
          <Route exact path= '/form' element={<Form/>}/>
        </Routes>
      
      {/* <Route exact path = "/form" component={Form}/> */}
      
  </div>    
  );
}

export default App;
