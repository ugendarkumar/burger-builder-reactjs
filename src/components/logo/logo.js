import React from 'react';
import LogoStyle from './logo.module.css';
import BurgerLogo from '../../assets/images/burger-logo.png'

const Logo = (props) => (
    <div className={LogoStyle.Logo}>
        <img src={BurgerLogo} alt="myBurger" />
    </div>
)

export default Logo;