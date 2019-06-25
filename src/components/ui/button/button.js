import React from 'react';
import ButtonStyle from './button.module.css';

console.log('Button style',ButtonStyle)
const Button = (props) => (
   
    <button className={[ButtonStyle.Button, ButtonStyle[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
)

export default Button;