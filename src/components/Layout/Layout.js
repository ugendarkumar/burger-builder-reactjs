import React from 'react';
import Aux from '../../hoc/Auxillary';

import Toolbar from '../navigation/toolbar/toolbar';

// CSS files import

import LayoutStyle from "./layout.module.css";



const layout = (props) => (
    
    <Aux>
       <Toolbar/>
        <main className={LayoutStyle.Content}>
            {props.children}
        </main>
    </Aux>

)

export default layout;