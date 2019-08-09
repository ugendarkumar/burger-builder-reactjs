import React from 'react';
import NavigationItem from './navigationItem/navigationItem';
import navItemStyle from './navigationItems.module.css'


const NavigationItems = (props) => (
    <ul className={navItemStyle.NavigationItems}>
        {/* active is a prop it's a boolean value hence directly passing as prop without value */}
       <NavigationItem link="/" >Burger Builder</NavigationItem>
       <NavigationItem link="/orders"> Orders</NavigationItem>
    </ul>
)

export default NavigationItems;