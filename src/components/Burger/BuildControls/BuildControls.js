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
    <p>Current price: {props.price.toFixed(2)}</p>
    {
        controls.map((control, i) => (
        <BuildControl label={control.label}
            key={i}
            added={() => props.ingredientAdded(control.type)}
            deducted={() => props.ingredientDeducted(control.type)}
            disabled={props.disabled[control.type]} />))
    }
    <button className={BuildControlStyle.OrderButton} 
        onClick={props.ordered}
        disabled={!props.purchaseable}>Order now</button>
</div>)

export default BuilControls;