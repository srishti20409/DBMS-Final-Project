import React from 'react'
import "./style.css";

var arr= [];

   function myFunction(input) {
        if (document.getElementById("check") == true){
            arr.push(input);
            alert(arr);
            console.log(arr);
          } 
        else {
            console.log = "unchecked";
          }
    }

function Cell(props) {
    
 

    return (
        <div className='cell'>
            <label for="check">
                props.val.USER_name
                </label>
            <input 
            type="checkbox"
            id="check" 
            onClick= {myFunction(props.val.idUSER)}
            />  
        </div>
    )
}

export default Cell
