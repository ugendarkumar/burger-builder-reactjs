import React from 'react';
import LogoStyle from './logo.module.css';
import BurgerLogo from '../../assets/images/burger-logo.png'

const Logo = (props) => (
    <div className={LogoStyle.Logo} style={{height:props.height}}>
        <img src={BurgerLogo} alt="myBurger" />
    </div>
)

export default Logo;