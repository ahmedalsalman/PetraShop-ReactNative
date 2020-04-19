import React from "react";
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import { connect } from "react-redux";

import { removeItemFromCart } from "../../redux/actions";

// Style
import styles from "./styles";

const CartItem = ({ item }) => (
  <ListItem style={styles.listStyle}>
    <Left>
      <Text style={styles.drink}>{item.product.name}</Text>
      <Text note style={styles.option}>
        {item.product.price}
      </Text>
    </Left>
    <Body>
      <Text style={styles.quantity}>{item.count}</Text>
    </Body>
    <Right>
      <Button transparent onPress={() => removeItemFromCart(item)}>
        <Icon name="trash" style={styles.removeItem} />
      </Button>
    </Right>
  </ListItem>
);

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
