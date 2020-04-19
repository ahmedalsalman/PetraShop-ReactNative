import React, { Component } from "react";
import { Text, List, Button } from "native-base";
import { connect } from "react-redux";

// Component
import CartItem from "./CartItem";

import { checkoutCart, login } from "../../redux/actions";
import { LOGIN, USER } from "../../Navigation/screenNames";

const ProducCart = ({ cart, user, checkoutCart, navigation }) => {
  // const cartProducts = cart.items;
  console.log("cart");
  console.log(cart);
  console.log(cart.length > 0);
  let cartItems = [];

  if (cart) cartItems = cart.items.map((item) => <CartItem item={item} />);

  return (
    <List>
      {cartItems.length ? (
        <>
          {cartItems}
          <Button
            full
            danger
            onPress={
              user
                ? () => checkoutCart({ date: new Date(), items: cart })
                : () => navigation.navigate(USER, { screen: LOGIN })
            }
          >
            <Text>{user ? "Checkout" : "login"}</Text>
          </Button>
        </>
      ) : (
        <Text style={{ textAlign: "center" }}>Buy something</Text>
      )}
    </List>
  );
};

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user,
});

const mapDispatchToProps = { checkoutCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProducCart);
