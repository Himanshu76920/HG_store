import React from 'react';
import { Link } from "react-router-dom";
import Style from './LinkButton.scss'
function LinkButton(props) {
    return (
       
            <Link className={props.cname} to={props.to} style={{height:props.height+'px', background:props.color}}> {props.text}</Link>
       
    );
}

export default LinkButton;