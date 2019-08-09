import React, { Component } from 'react';
import ContactStyle from './contactData.module.css';
import Button from '../../../components/ui/button/button';
import axios from '../../../axios-order';
import Spinner from '../../../components/ui/spinner/spinner';
import Input from '../../../components/ui/input/input';

class ContactData extends Component {


    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your email'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street'
                },
                value: ''
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your zipcode'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your country'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'Fastest', displayValue: 'Fastest' },
                        { value: 'Cheapest', displayValue: 'Cheapest' }]
                },
                value: ''
            }
        },
        loading:false
    }

    inputChangeHandler = (event,elementId) => {
        let updatedFormData = {...this.state.orderForm};
        let updatedElement = {...updatedFormData[elementId]};
        updatedElement['value'] = event.target.value;
        updatedFormData[elementId] = updatedElement;
        this.setState({orderForm:updatedFormData});
    }


    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for(let x in this.state.orderForm){
         formData[x] = this.state.orderForm[x]['value'];
        }
        let data = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData:formData
        }
        axios.post('/orders.json', data)
            .then(res => {
                this.setState({ loading: false })
                this.props.history.push('/')
            })
            .catch(err => {
                this.setState({
                    loading: false
                })
            });
    }



    render() {

        const formElements = [];

        for (let x in this.state.orderForm) {
            formElements.push({ id: x, config: this.state.orderForm[x] })
        }

        let form = (<form>
            {
                formElements.map(x => {
                    return (
                        <Input key={x.id}
                            elementType={x.config.elementType}
                            elementConfig={x.config.elementConfig}
                            changed={(event) => {this.inputChangeHandler(event,x.id)}}
                            value={x.config.value} />
                    )
                })
            }
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={ContactStyle.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;