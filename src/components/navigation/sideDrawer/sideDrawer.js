
import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems';
import SideDrawerStyle from './sideDrawer.module.css';
import BackDrop from '../../ui/backdrop/backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxillary';

const sideDrawer = (props) => {

    let showSideDrawerStyle = [SideDrawerStyle.SideDrawer,SideDrawerStyle.Close];

    if(props.show){
        showSideDrawerStyle = [SideDrawerStyle.SideDrawer,SideDrawerStyle.Open];
    }

    return (
        <Auxillary>
            <BackDrop  show = {props.show} clicked={props.clicked} />
            <div className={showSideDrawerStyle.join(' ')}>
                <div className={SideDrawerStyle.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxillary>
    )
}


export default sideDrawer;