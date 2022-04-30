import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import "./login.css"
import { Axios } from "axios";
import { SettingsSuggestRounded } from "@mui/icons-material";

function Form() {
  const [page, setPage] = useState(0);
  //const [phone, setPhone] = useState("");
  const [Info, setInfo] = useState({
    Phone: "",
    Name: "",
    Desciption: "",
    Picture: "",
  })

  // const adduser = () => {
  //   Axios.post("https://localhost:3001/create",{
  //     Name: Name,
  //     phone: phone,
  //     Desciption: Desciption,
  //     pic: pic,
  //   })
  // }

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
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(Info);
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