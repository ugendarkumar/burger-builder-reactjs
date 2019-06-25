import React from 'react';

import ToolbarStyle from './toolbar.module.css';

import Logo from '../../logo/logo';


const Toolbar = (props) => (
    <header className={ToolbarStyle.Toolbar}>
      <div>MENU</div>
     <Logo/>
      <nav>
         ...
      </nav>
    </header>
)

export default Toolbar;

