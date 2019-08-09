import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../ui/button/button';
import checkoutSummaryStyle from './checkoutSummary.module.css';

const CheckoutSummary = (props) => {
console.log('Checkout summary', props)
    return (
        <div className={checkoutSummaryStyle.CheckoutSummary}>
            <h1>Hope it tastes well</h1>
            <div style = {{width:'100%',margin:'auto'}}>
              <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType ="Danger" clicked={props.cancel}>Cancel </Button>
            <Button btnType ="Success" clicked = {props.continue}>Continue </Button>
        </div>
    )
}

export default CheckoutSummary;