import React,{Component} from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from '../../ui/button/button';




class OrderSummary extends Component{

    componentDidUpdate () {
        console.log(`[orderSummary.js] is updated`)
    }
    
    

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}> <span style={{textTransform:"capaitalize"}}>
            {igKey} </span> : {this.props.ingredients[igKey]} </li>
        });
        return(
            <Aux>
            <h3> Your order </h3>
            <p>A delicious burger with the following ingredients </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout ?</p>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            <Button btnType="Danger" clicked={this.props.purchaseCancel}>Cancel</Button>
         </Aux>
        )
    }
}



export default OrderSummary;