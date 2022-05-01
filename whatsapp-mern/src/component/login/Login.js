import React, { useState } from "react";
import "./Form.css"
import axios from "axios";
import { SettingsSuggestRounded } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import Main from "../main/Main";

function Form() 
{
    const [Phone , setPhone] = useState("");
    const login_user = () =>{
        axios.post('http://localhost:3001/login2',
        {
            Phone: Phone,
        })
        .then(res=>{
            console.log(res.data)
          })
    }

    
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
                <button onClick={login_user}>
                    <Link to = '/'>
                    Enter
                    </Link>
                </button>
                </div>

            </div>
        </div>
        </div>
    );
}

export default Form;