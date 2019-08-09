import React from 'react';
import drawerToggleStyle from './drawerToggle.module.css';

const DrawerToggle = (props) => {
    return(
        <div onClick={props.clicked} className={drawerToggleStyle.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        
    )
}

export default DrawerToggle;