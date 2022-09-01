import React from 'react';
import { Link } from "react-router-dom";

function LinkButton(props) {
    return (
        <div>
            <Link to={props.to} style={{height:props.height+'px', background:props.color}}> {props.text}</Link>
        </div>
    );
}

export default LinkButton;