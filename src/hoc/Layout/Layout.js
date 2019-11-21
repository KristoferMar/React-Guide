import React, { Component } from 'react';
import classes from './Layout.css'
import AuxC from '../AuxC/AuxC'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Employees from '../../containers/Employees/Employees';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <AuxC>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}>
                </SideDrawer>

                <main className={classes.Content}>
                    {this.props.children}
                </main>

                <h2>Employees:</h2>
                <Employees></Employees>
            </AuxC>
        )
    }
}

export default Layout;