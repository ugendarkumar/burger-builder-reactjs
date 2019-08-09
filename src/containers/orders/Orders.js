import React, { Component } from 'react';
import Order from '../../components/Order/order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


class Orders extends Component {


    state = {
        orders: [],
        loading: false
    }

    componentDidMount() {
        axios.get('/orders.json').then(res => {
            let orderData = [];
            for (let x in res.data) {
                orderData.push({ ...res.data[x], id: x })
            }
            this.setState({ loading: false,orders:orderData });
        }).catch(e => {
            this.setState({ loading: false });
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.orders.map(x => (
                        <Order key = {x.id}
                        ingredients = {x.ingredients}
                        price = {+x.price}
                        />
                    ))
                }

            </div>
        )
    }

}


export default withErrorHandler(Orders, axios);