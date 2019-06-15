import React from 'react';
import burgerStyle from './burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = () => {
console.log(burgerStyle.Burger)
    return(
        <div className={burgerStyle.Burger}>
         <BurgerIngredient type="bread-top"/>
         <BurgerIngredient type="cheese"/>
         <BurgerIngredient type="meat"/>
         <BurgerIngredient type="bread-bottom"/>

        </div>
    )

}

export default burger;