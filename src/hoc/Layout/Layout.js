import React, { Component } from 'react';
import Aux from '../Auxillary/Auxillary';

import Toolbar from '../../components/navigation/toolbar/toolbar';
import SideDrawer from '../../components/navigation/sideDrawer/sideDrawer';


// CSS files import

import LayoutStyle from "./layout.module.css";


class Layout extends Component {

    state = {
        showSideDrawer:false
    }

     sideDrawerHandler = () => {
     this.setState({showSideDrawer:false})
    }

    drawToggleHandler = () => {
        this.setState((prevState) => {
        return {
            showSideDrawer:!prevState.showSideDrawer
        }
        })
    }


    render() {
        return (
            <Aux>
            <Toolbar drawToggleClicked={this.drawToggleHandler}/>
            <SideDrawer show = {this.state.showSideDrawer} clicked={this.sideDrawerHandler} />
            <main className={LayoutStyle.Content}>
                {this.props.children}
            </main>
        </Aux>

        )
    }
}

export default Layout;