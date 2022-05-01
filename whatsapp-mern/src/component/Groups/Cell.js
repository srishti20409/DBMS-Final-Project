import React from 'react'
import "./style.css";

var arr= [];

//    function myFunction(input) {
//             arr.push(input);
//             alert(arr);
//             console.log(arr);
//     }


function Cell(props) {
    return (
        <div className='cell'>
            
            <input 
            type="checkbox"
            id="check" 
            onChange = {() => {props.MemberList.push(props.val.idUSER)}}
            //onChange = {() => myFunction(props.val.idUSER)}
            />  
            <h2>{props.val.USER_name}</h2>
        </div>
    )
}

export default Cell
