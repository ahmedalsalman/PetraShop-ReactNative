import React from "react";
import {
  Container,
  Content,
  List,
  View,
  Text,
  ListItem,
  Card,
} from "native-base";
import { Image, ImageBackground } from "react-native";
import { data } from "./data";
import styles from "./styles";

const Catogries = ({ navigation }) => {
  //   const products = props.products;
  console.log(data);
  const productsList = data.map((item) => (
    <ImageBackground source={{ uri: item.img_url }}>
      <View style={styles.overlay} />
      <Card
        style={styles.transparent}
        key={item.id}
        // onPress={() => navigation.navigate("ProductList")}
      >
        <Text
          style={styles.text}
          onPress={() => navigation.navigate("ProductList")}
        >
          {item.name}
        </Text>
      </Card>
    </ImageBackground>
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

export default Catogries;
