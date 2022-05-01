import React, { useState } from "react";
import "./Form.css"
import axios from "axios";
import { SettingsSuggestRounded } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import Main from "../main/Main";

function Form() 
{
  const [Info, setInfo] = useState({
    Phone: "",
    Name: "",
    Desciption: "",
    Picture: "",
    Login: (1),
    Date: new Date(Date.now()).toISOString().split('T')[0]+" "+new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),
  })

  const addUser=() =>{
  
      axios.post('http://localhost:3001/login1',{
      Name: Info.Name,
      Phone: Info.Phone,
      Desciption: Info.Desciption,
      Picture: Info.Picture,
      Login: Info.Login,
      Date: Info.Date,
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
              <h1>Register</h1>
            </div>

            <div className="body">
                <div className="sign-up-container">
                    <input
                        type="text"
                        placeholder="Phone..."
                        value={Info.Phone}
                        onChange={(e) => {
                        setInfo({ ...Info, Phone: e.target.value });
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Name."
                        value={Info.Name}
                        onChange={(e) => {
                        setInfo({ ...Info, Name: e.target.value });
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Desciption"
                        value={Info.Desciption}
                        onChange={(e) => {
                        setInfo({ ...Info, Desciption: e.target.value });
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Picture"
                        value={Info.Picture}
                        onChange={(e) => {
                        setInfo({ ...Info, Picture: e.target.value });
                        }}
                    />
                </div>
            </div>

            <div className="footer">
              <button onClick= {addUser} >
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