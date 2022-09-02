import React from 'react';

function SimpleButton(props) {
    return (
        <div>
            <button className={props.cname} style={{height:props.height+'px', background:props.color}}> {props.text}</button>
        </div>
    );
}

export default SimpleButton;