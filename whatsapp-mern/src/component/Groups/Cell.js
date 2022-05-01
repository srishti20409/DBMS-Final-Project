import React from 'react'
import "./style.css";

var arr= [];

   function myFunction(input) {
            arr.push(input);
            alert(arr);
            console.log(arr);
    }

function Cell(props) {
    return (
        <div className='cell'>
            <label for="check">
                {props.val.USER_name}
                </label>
            <input 
            type="checkbox"
            id="check" 
            onChange = {() => myFunction(props.val.idUSER)}
            />  
        </div>
    )
}

export default Cell
