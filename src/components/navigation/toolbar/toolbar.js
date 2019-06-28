import React from 'react';

import ToolbarStyle from './toolbar.module.css';

import Logo from '../../logo/logo';

import NavigationItems from '../navigationItems/navigationItems'

const Toolbar = (props) => (
    <header className={ToolbarStyle.Toolbar}>
      <div>MENU</div>
     <Logo/>
      <nav>
         <NavigationItems/>
      </nav>
    </header>
)

export default Toolbar;

