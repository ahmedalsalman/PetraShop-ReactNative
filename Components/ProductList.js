import React from "react";
import { Container, Content, List, View, Text, ListItem } from "native-base";
import { Image } from "react-native";
import { connect } from "react-redux";
import { exp } from "react-native-reanimated"; // <-- ded

const ProductList = props => {
  const products = props.products;
  console.log(products); // <-- :/
  const productsList = products.map(item => (
    <ListItem
      key={item.id}
      onPress={() => props.navigation.navigate("ProductDetail", { item: item })}
    >
      <Image source={{ uri: item.image1 }} style={{ width: 50, height: 50 }} />
      <Text>{item.name}</Text>
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
const mapStateToProps = state => {
  return {
    products: state.productsState.products
  };
};
export default connect(mapStateToProps)(ProductList);
// export default ProductList; <-- ded
