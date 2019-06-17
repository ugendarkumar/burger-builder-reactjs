import React from 'react';
import burgerStyle from './burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    console.log(props.ingredients)
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { 
                // Array() forms undefined values of array based on ingredients value, _ will be undefined values
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }).reduce((acc,x) => {   // using reduce to flatten array of arrays
         return acc.concat(x)
        },[])
        
       if(transformedIngredients.length === 0){
           transformedIngredients = <p>Please start adding ingredients! </p>
       }

    return (
        <div className={burgerStyle.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    )

}

export default burger;