import React, { useState } from "react";
import "./Form.css"
import { Link } from "react-router-dom";

  function Landingpage()
  {
  return (
    <div className="App">
      <div className="form">
        <div className="button-container">
            <button>
                <Link to = "/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>Login</Link>
            </button>
            <button>
                <Link to = "/register" style={{ color: 'inherit', textDecoration: 'inherit'}}>Register</Link>
            </button>
           
            
        </div>
      </div>
    </div>
  );
}

export default Landingpage;