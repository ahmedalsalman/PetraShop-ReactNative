import React, { Component } from "react";
import { Text, List, Button } from "native-base";
import { connect } from "react-redux";

// Component
import CartItem from "./CartItem";

import { checkoutCart, login, fetchCart } from "../../redux/actions";
import { LOGIN, USER } from "../../Navigation/screenNames";

class ProducCart extends Component {
  componentDidMount() {
    if (this.props.user) this.props.fetchCart(this.props.user.user_id);
  }
  componentDidUpdate(preProps) {
    // if (this.props.cart.length !== preProps.cart.length)
    // setInterval(() => {
    if (this.props.user) this.props.fetchCart(this.props.user.user_id);
    // }, 2000);
  }
  render() {
    // console.log(this.props.user.user_id);
    let cartItems = [];

    if (this.props.cart)
      cartItems = this.props.cart.items.map((item) => (
        <CartItem item={item} itemId={item.id} />
      ));

    return (
      <List>
        {cartItems.length ? (
          <>
            {cartItems}
            <Button
              full
              danger
              onPress={
                this.props.user
                  ? () => {
                      this.props.checkoutCart();
                    }
                  : () =>
                      this.props.navigation.navigate(USER, { screen: LOGIN })
              }
            >
              <Text>{this.props.user ? "Checkout" : "login"}</Text>
            </Button>
          </>
        ) : (
          <Text style={{ textAlign: "center" }}>Buy something</Text>
        )}
      </List>
    );
  }
}

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    checkoutCart: () => dispatch(checkoutCart()),
    fetchCart: (cartID) => dispatch(fetchCart(cartID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProducCart);
