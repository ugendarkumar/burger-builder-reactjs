import React from 'react';

// stateless components import

import Layout from './components/Layout/Layout';

// stateful component import

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


function App() {
  return (
    <div>
      <Layout><BurgerBuilder></BurgerBuilder></Layout>
    </div>
  );
}

export default App;
