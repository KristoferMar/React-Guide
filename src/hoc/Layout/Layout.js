import React, { Component } from 'react';
import { connect } from 'react-redux'
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
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
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

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);