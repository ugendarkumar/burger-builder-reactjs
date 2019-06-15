import React,{Component} from 'react';
import ingredientStyle from './BurgerIngredients.module.css';
import propType from 'prop-types';

class BurgerIngredient extends Component{

    render(){

        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={ingredientStyle.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (<div className={ingredientStyle.BreadTop}>
                    <div className={ingredientStyle.Seeds1}></div>
                    <div className={ingredientStyle.Seeds2}></div>
                </div>)
                break;
            case ('meat'):
                ingredient = <div className={ingredientStyle.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={ingredientStyle.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={ingredientStyle.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={ingredientStyle.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
     
        return ingredient;
    }
 
}

BurgerIngredient.propType = {
    type:propType.string.isRequired
}


export default BurgerIngredient;