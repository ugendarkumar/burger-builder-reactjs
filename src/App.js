import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
// stateless components import

import Layout from './hoc/Layout/Layout';

// stateful component import

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/checkout';
import Orders from './containers/orders/Orders';

class App extends Component {

  render( ){
    return (
      <div>
        <Layout>
          <Switch>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/" exact component={BurgerBuilder}></Route>
          </Switch>         
        </Layout>
      </div>
    );
  }
   
}

export default App;
