import React from 'react';

import ToolbarStyle from './toolbar.module.css';

import Logo from '../../logo/logo';

import NavigationItems from '../navigationItems/navigationItems';

import DrawerToggle from '../sideDrawer/drawerToggle/drawerToogle';

const Toolbar = (props) => (
    <header className={ToolbarStyle.Toolbar}>
      <DrawerToggle clicked = {props.drawToggleClicked}/>
      <div className={ToolbarStyle.Logo}>
      <Logo/>
      </div>
      <nav className={ToolbarStyle.DesktopOnly}>
         <NavigationItems/>
      </nav>
    </header>
)

export default Toolbar;

