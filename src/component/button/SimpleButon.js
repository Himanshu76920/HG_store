import React from 'react';
import Style from './SimpleButton.scss';


function SimpleButon(props) {
    return (
        <div>
            <button className={props.cname} style={{height:props.height+'px', background:props.color}}> {props.text}</button>
        </div>
    );
}

export default SimpleButon;