import React from 'react';
import {NavLink} from 'react-router-dom';
import NavItemStyle from './navigationItem.module.css';

const NavigationItem = (props) => (
    <li
        className={NavItemStyle.NavigationItem}>
        <NavLink exact to={props.link}
            activeClassName={NavItemStyle.active}>{props.children}</NavLink>
    </li>

)

export default NavigationItem;