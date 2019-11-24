import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import * as actions from '../../store/actions/index'


class Checkout extends Component {

    componentWillMount() {
    //    this.props.onInitPurchase();
    }

    //Everything below here is now handled in redux.
    /*     state = {
            ingredients: null,
            totalPrice: 0
        } */

    /*     componentWillMount() {
            const query = new URLSearchParams(this.props.location.search);
            const ingredients = {};
            let price = 0;
            for (let param of query.entries()) {
                // ['salad', '1']
                if (param[0] === 'price') {
                    price = param[1];
                } else {
                    ingredients[param[0]] = +param[1]
                }
            }
            this.setState({ ingredients: ingredients, totalPrice: price })
        } */

    checkoutCancelledHandler = () => {
        this.props.history.goBack(); // Goes back to the last page
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        let summary = <Redirect to="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />

                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            )
        }
        return summary

    }
}

//We parse local states to redux and handle it from there.
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

/* const mapDispatchToProps = dispatch => {
    return {
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
} */

export default connect(mapStateToProps)(Checkout);