import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import "./Form.css"
import { Axios } from "axios";
import { SettingsSuggestRounded } from "@mui/icons-material";
import { Link } from 'react-router-dom';

function Form() {
  const [page, setPage] = useState(0);
  //const [phone, setPhone] = useState("");
  const [Info, setInfo] = useState({
    Phone: "",
    Name: "",
    Desciption: "",
    Picture: "",
  })

  // Axios.post('http://localhost:3000/login', Info)
  //   .then(response => {
  //     console.log(res.data)
  //   })

  function abc(){
  const sendUser = () => 
   {
      Axios.post("https://localhost:3000/login",{
        Name: Info.Name,
        Phone: Info.Phone,
        Desciption: Info.Desciption,
        Picture: Info.Picture,
      })
      .then(res=>{
        console.log(res.data)
      })
    }
  }

  const FormTitles = ["Login", "Personal Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo Info={Info} setInfo={setInfo} />;
    } else {
      return <PersonalInfo Info={Info} setInfo={setInfo} />;
    }
  };

  return (
    <div className="App">
      <div className="form">
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>


          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>


            <button onClick= {() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(Info);
                  abc();
                  // href = 'http://localhost:3000/';
                  //location.href='http://localhost:3000/';
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;