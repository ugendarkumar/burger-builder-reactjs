import React from 'react';
import OrderStyle from './order.module.css';

const Order = (props) => {

   let ingredientsData = [];

    console.log(props)

    for(let x in props.ingredients){
        ingredientsData.push({name:x,value:props.ingredients[x]}); 
    }

    let ouputIngredients = ingredientsData.map(x => {
        return <span key={x.name} style={{
              textTransform:'capitalize',
              border:'1px solid #ccc',
              display:'inline-block',
              margin:'0 8px',
              padding:'5px'
        }}>{x.name} ({x.value})</span>
    })

    return (
        <div className={OrderStyle.Order}>
            <p>{ouputIngredients}</p>
            <p>Price : <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}


export default Order;