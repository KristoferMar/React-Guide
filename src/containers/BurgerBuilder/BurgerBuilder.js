import React, { Component } from 'react'
import { connect } from 'react-redux'
import Burger from '../../components/Burger/Burger'
import AuxC from '../../hoc/AuxC/AuxC'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummery/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import axios from '../../axios-orders'
import * as actions from '../../store/actions/index'

class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state ={...}
    // }

    state = {
        loading: false,
        // Key/value pairs
        //totalPrice: 4,
        //purchaseable: false,
        //purchasing: false,
        //error: false
    }

    // DID MOUNT is the best place to fetch data. 
    componentDidMount() {
        this.props.onInitIngredients();
    }

    //This is moved intp redux
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0)
        // this.setState({ purchaseable: sum >= 0 });
        return sum > 0;
    }

    /*     addIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            const updatedCounted = oldCount + 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCounted;
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAddition;
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
            this.updatePurchaseState(updatedIngredients)
        } */

    /*     removeIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            if (oldCount <= 0) {
                return;
            }
            const updatedCounted = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCounted;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
            this.updatePurchaseState(updatedIngredients)
        } */

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({ purchasing: true })
        } else {
            this.props.onSetAuthRedirectPath("/checkout")
            this.props.history.push('/auth');
        }
    }

    purchaseCancleHandler = () => {
        this.setState({ purchasing: false })
    }

    //Post order to server - local component handling = this is handled in redux now
    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
        /*         const queryParams = [];
                for (let i in this.state.ingredients) {
                    queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
                }
                queryParams.push('price=' + this.state.totalPrice);
                const queryString = queryParams.join('&');
                this.props.history.push({
                    pathname: '/checkout',
                    search: '?' + queryString
                }); */
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />

        if (this.props.ings) {
            burger = (
                <AuxC>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        isAuth={this.props.isAuthenticated}
                        price={this.props.price} />
                </AuxC>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancled={this.purchaseCancleHandler}
                purchaseContinued={this.purchaseContinueHandler} />
        }
        /*         if (this.state.loading) {
                    orderSummary = <Spinner />
                } */

        return (
            <AuxC>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </AuxC>
        );
    }
}

//Sending component state to be handled in REDUX.
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

//We access the methods below with "this.props...."
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));