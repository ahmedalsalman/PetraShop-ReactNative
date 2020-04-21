import React from "react";
import {
  Container,
  Content,
  List,
  View,
  Text,
  ListItem,
  Right,
  Button,
  // Icon,
  Left,
  Body,
} from "native-base";
import { Image } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { addItemToCart } from "../redux/actions";

import Icon from "react-native-vector-icons/FontAwesome";
const ProductList = (props) => {
  const products = props.products;
  const catogry = props.route.params.catogry.name;

  const productsList = products
    .filter((item) => item.category === catogry)
    .map((item) => (
      <ListItem
        key={item.id}
        onPress={() =>
          props.navigation.navigate("ProductDetail", { item: item })
        }
      >
        <Left>
          <Image
            source={{ uri: item.image1 }}
            style={{ width: 120, height: 150 }}
          />

          {/* <Body> */}
          <Text style={styles.text}>
            {item.name}
            <Text style={styles.text2}>{item.price}$</Text>
          </Text>
        </Left>
        <Right>
          <Button transparent>
            <Icon
              name="shopping-bag"
              style={styles.bag}
              size={20}
              onPress={() => props.addItemToCart(item.id, 1)}
            />
          </Button>
        </Right>
      </ListItem>
    ));

  return (
    <Container>
      <Content>
        <View>
          <List>{productsList}</List>
        </View>
      </Content>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.productsState.products,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (itemID, count) => dispatch(addItemToCart(itemID, count)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
