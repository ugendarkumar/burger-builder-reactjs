import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';

import Burger from '../../components/Burger/Burger'
import BurgerControl from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/orderSummary/orderSummary';

// import Modal
import Modal from '../../components/ui/modal/modal';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing:false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => sum + el, 0);
        this.setState({ purchaseable: sum > 0 })
    }


    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const deductedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = deductedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients)
    }

    updatePurchase = () => {
        this.setState({purchasing:true})
    }
    cancelPurchase = () => {
        this.setState({purchasing:false})
    }

    purchaseContinue = () => {
        alert('You continue!');
    }

    render() {
        // disable 'less' button in control if ingredients count is zero
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing}
                 closed={this.cancelPurchase}>
                 <OrderSummary price={this.state.totalPrice}
                 ingredients={this.state.ingredients}
                  purchaseCancel={this.cancelPurchase}
                 purchaseContinue={this.purchaseContinue} /></Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControl
                    ingredientAdded={this.addIngredientsHandler}
                    ingredientDeducted={this.removeIngredientsHandler}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    disabled={disabledInfo}
                    ordered={this.updatePurchase}
                    />
            </Aux>
        )
    }
}

export default BurgerBuilder;