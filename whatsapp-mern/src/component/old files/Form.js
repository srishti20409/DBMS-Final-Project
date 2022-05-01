// import React, { useState } from "react";
// import SignUpInfo from "./SignUpInfo";
// import "./Form.css"
// import axios from "axios";
// import { SettingsSuggestRounded } from "@mui/icons-material";
// import { Link } from 'react-router-dom';
// import Main from "../main/Main";

// function Form() 
// {
//   const [Info, setInfo] = useState({
//     Phone: "",
//     Name: "",
//     Desciption: "",
//     Picture: "",
//   })

//   const addUser=() =>{
  
//       axios.post('http://localhost:3001/login',{
//       Name: Info.Name,
//       Phone: Info.Phone,
//       Desciption: Info.Desciption,
//       Picture: Info.Picture,
//       })
//       .then(res=>{
//         console.log(res.data)
//       })
//   }

//   return (
//     <div className="App">
//       <div className="form">
//         <div className="form-container">

//             <div className="header">
//               <h1>Login</h1>
//             </div>

//             <div className="body">
//               <SignUpInfo Info={Info} setInfo={setInfo} />
//             </div>

//             <div className="footer">
//               <button onClick= {addUser} >
//                 Enter
//               </button>
//             </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Form;