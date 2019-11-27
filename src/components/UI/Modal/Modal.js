import React, { Component } from 'react'
import classes from './Modal.css'
import AuxC from '../../../hoc/AuxC/AuxC'
import Backdrop from '../Backdrop/Backdrop'

//We can but anything inside the div
//We've implemented a model in a component with a css file.
class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
    }

    render() {
        return (
            <AuxC>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}></Backdrop>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </AuxC>
        )
    }
}

export default Modal;