import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import appRoutes from './routes';
import CartContext from "../context/cart-context";

class Index extends Component {
    state = {

    };

    componentDidMount() {
        this.updateCartStateFromLocalStorage();
    }


    updateCartStateFromLocalStorage = () => {
        let cartStorage = localStorage.getItem('cart');

        let {cart} = this.state;

        if (cartStorage) {
            cart = JSON.parse(cartStorage);
        }

        this.handleUpdateMainState({cart});

    };

    handleUpdateMainState = object => this.setState({...object});

    render() {
        return (
            <CartContext.Provider value={{
                ...this.state,
                handleUpdateMainState: this.handleUpdateMainState,
                updateCartStateFromLocalStorage: this.updateCartStateFromLocalStorage
            }}>
                <Switch>
                    {appRoutes.map((route, key) =>
                        <Route
                            key={key}
                            exact
                            {...route}
                        />
                    )}
                </Switch>
            </CartContext.Provider>
        );
    }
}

export default withRouter(Index);
