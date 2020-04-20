import React from "react";
import { Container, Content, List, View, Text, ListItem } from "native-base";
import { Image } from "react-native";
import { connect } from "react-redux";

const ProductList = (props) => {
  const products = props.products;
  const catogry = props.route.params.catogry.name;
  // console.log(catogry === "Paintings & Art");
  console.log(products);
  const productsList = products
    .filter((item) => item.category === catogry)
    .map((item) => (
      <ListItem
        key={item.id}
        onPress={() =>
          props.navigation.navigate("ProductDetail", { item: item })
        }
      >
        <Image
          source={{ uri: item.image1 }}
          style={{ width: 150, height: 150 }}
        />

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
const mapStateToProps = (state) => {
  return {
    products: state.productsState.products,
  };
};
export default connect(mapStateToProps)(ProductList);
