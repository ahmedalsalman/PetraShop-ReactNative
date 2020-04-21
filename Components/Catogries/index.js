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
  const catogryList = data.map((item) => (
    <ImageBackground source={{ uri: item.img_url }} style={styles.background}>
      <View style={styles.overlay} />
      <Card style={styles.transparent} key={item.id}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate("ProductList", { catogry: item })}
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
          <List>{catogryList}</List>
        </View>
      </Content>
    </Container>
  );
};

export default Catogries;
