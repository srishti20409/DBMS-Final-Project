import React, { useState } from "react";
import "./Form.css"
import axios from "axios";
import { SettingsSuggestRounded } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import Main from "../main/Main";

function Form() 
{
    const [Phone , setPhone] = useState("");
    
    return (
        <div className="App">
        <div className="form">
            <div className="form-container">

                <div className="header">
                <h1>Login</h1>
                </div>

                <div className="body">
                    <div className="sign-up-container">
                        <input
                            type="text"
                            placeholder="Phone..."
                            onChange={(event) => {
                            setPhone(event.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="footer">
                <button onClick=  {(event) => {alert("FORM SUBMITTED");console.log(Phone)}} >
                    Enter
                </button>
                </div>

            </div>
        </div>
        </div>
    );
}

export default Form;