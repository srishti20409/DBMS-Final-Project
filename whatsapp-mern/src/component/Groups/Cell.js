import React from 'react'
import "./style.css";

var arr= [];
function myFunction(inputCB) {
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true){
        arr.push(inputCB);
        alert(arr);
        console.log(arr);
      } else {
         console.log = "unchecked";
      }
  
}

function Cell(props) {
    return (
        <div className='cell'>
            <input 
            type="checkbox"
            id="myCheck" 
            onClick = {myFunction(props.val.idUSER)}
            placeholder='props.val.USER_name'/>  
        </div>
    )
}

export default Cell
