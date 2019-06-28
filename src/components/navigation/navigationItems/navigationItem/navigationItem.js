import React from 'react';

import NavItemStyle from './navigationItem.module.css';


console.log('navstyle',NavItemStyle)

const NavigationItem = (props) => (
    <li 
    className={NavItemStyle.NavigationItem}>
    <a href={props.link}
     className={props.active ? NavItemStyle.active:null}>{props.children}</a>
    </li>

)

export default NavigationItem;