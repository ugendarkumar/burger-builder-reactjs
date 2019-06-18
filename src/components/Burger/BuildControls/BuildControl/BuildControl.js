import React from 'react';
import BuildControlStyle from './BuildControl.module.css';

const BuildControl = (props) => {
    return (
        <div className={BuildControlStyle.BuildControl}>
            <div className={BuildControlStyle.Label}>
            {props.label}
            </div>
            <button className={BuildControlStyle.Less} onClick={props.deducted} disabled={props.disabled}>Less</button>
            <button className={BuildControlStyle.More} onClick={props.added}>More</button>
         </div>
    )
}

export default BuildControl;