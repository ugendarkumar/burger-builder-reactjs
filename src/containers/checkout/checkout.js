import React ,{Component} from 'react';
import CheckoutSummary from '../../components/Order/checkoutSummary/checkoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './contactData/contactData';


class Checkout extends Component {

    

    state = {
     ingredients:null,
     totalPrice:0   
    }

    componentWillMount(){

        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}; 
        let price = 0;
        for (let x of query.entries()){
            if(x[0] === 'price'){
             price = x[1];
            } else {
                ingredients[x[0]] = +x[1];
            }
        }

        this.setState({ingredients:ingredients,totalPrice:price})
    }


    continueHandler = () => {
this.props.history.replace('/checkout/contact-data')
    }

    cancelHandler = () => {
       this.props.history.goBack(); 
    }


render(){

    return (
        <div>
       <CheckoutSummary ingredients ={this.state.ingredients}
        continue = {this.continueHandler}
        cancel ={this.cancelHandler}
       />

       <Route path={this.props.match.path + '/contact-data'} render = {(props) => <ContactData ingredients= {this.state.ingredients} price={this.state.totalPrice} {...props}/>} />
        </div>
     )
}
}

export default Checkout;