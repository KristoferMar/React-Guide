import React, { Component } from 'react'

import AuxC from '../../../hoc/AuxC/AuxC'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    componentDidUpdate() {

    }

    // This could be a functional component
    componentWillUpdate() {
        console.log('[OrderSummary] will update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li>
                )
            })

        return (
            < AuxC >
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout? </p>
                <Button btnType="Danger" clicked={this.props.purchaseCancled}>CANCLE</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </AuxC >
        )
    }

};

export default OrderSummary;