import React from 'react';
import InputStyle from './input.module.css';

const Input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input {...props.elementConfig} onChange={props.changed} className={InputStyle.InputElement} value={props.value} />
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} onChange={props.changed} className={InputStyle.InputElement} value={props.value} />
            break;
        case ('select'):
            inputElement = <select  className={InputStyle.InputElement} onChange={props.changed} value={props.value} > {
                props.elementConfig.options.map(x => {
                    return(
                        <option key={x.value} value={x.value}>{x.displayValue}</option>
                    )
                })
            }</select>
            break;
        default:
            inputElement = <textarea {...props.elementConfig} onChange={props.changed} className={InputStyle.InputElement} value={props.value} />
    }

    return (
        <div className={InputStyle.Input}>
            <label className={InputStyle.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}


export default Input;