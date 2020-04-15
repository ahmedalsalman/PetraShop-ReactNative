import React from "react";
import { Image, View, Text } from "react-native";
import { Body, Card, CardItem, Content, Container } from "native-base";

// Styles
import styles from "./styles";

const ProducDetail = ({ route }) => {
  const { item } = route.params;
  return (
    <Container>
      <Content>
        <View>
          <Card>
            <CardItem>
              <Body>
                <Text>{item.name}</Text>
                <Image
                  source={{ uri: item.image1 }}
                  style={{ width: 330, height: 250 }}
                />
                <Text>{item.description}</Text>
                <Text>price: {item.price}$</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </Content>
    </Container>
  );
};

export default ProducDetail;
