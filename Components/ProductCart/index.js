import React, { Component } from "react";
import { Text, List, Button } from "native-base";
import { connect } from "react-redux";

// Component
import CartItem from "./CartItem";

import { checkoutCart, login, fetchCart } from "../../redux/actions";
import { LOGIN, USER } from "../../Navigation/screenNames";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./styles";

class ProducCart extends Component {
  componentDidMount() {
    if (this.props.user) this.props.fetchCart();
  }
  componentDidUpdate(preProps) {
    if (this.props.user) this.props.fetchCart();
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
              style={styles.button}
              onPress={
                this.props.user
                  ? () => {
                      this.props.checkoutCart();
                    }
                  : () =>
                      this.props.navigation.navigate(USER, { screen: LOGIN })
              }
            >
              <Text>
                {this.props.user ? (
                  <Text>
                    Checkout
                    <Icon name="shoppingcart" size={30} />
                  </Text>
                ) : (
                  "login"
                )}
              </Text>
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
    fetchCart: () => dispatch(fetchCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProducCart);
