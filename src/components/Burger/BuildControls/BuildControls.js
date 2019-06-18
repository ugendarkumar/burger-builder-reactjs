import React from 'react';
import BuildControlStyle from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' }
]



const BuilControls = (props) => (<div className={BuildControlStyle.BuildControls}>
    <p>Current price: {props.price}</p>
    {controls.map((control, i) => (
        <BuildControl label={control.label}
            key={i}
            added={() => props.ingredientAdded(control.type)}
            deducted={() => props.ingredientDeducted(control.type)}
            disabled={props.disabled[control.type]} />))
    }
</div>)

export default BuilControls;