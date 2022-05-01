import React from 'react'
import "./style.css";

function Cell(props) {
    return (
        <div className='cell'>
            <h2>{props.val.USER_name}</h2>
            <p>{props.val.USER_phone_number}</p>
        </div>
    )
}

export default Cell
