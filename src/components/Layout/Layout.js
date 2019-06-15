import React from 'react';
import Aux from '../../hoc/Auxillary';


// CSS files import

import LayoutStyle from "./layout.module.css";


console.log('LayoutStyle',LayoutStyle.Content)


const layout = (props) => (
    
    <Aux>
        <div>SideDrawer,Backdrop,Toolbar</div>
        <main className={LayoutStyle.Content}>
            {props.children}
        </main>
    </Aux>

)

export default layout;