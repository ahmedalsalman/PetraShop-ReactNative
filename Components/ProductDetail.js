import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import {
  Body,
  Card,
  CardItem,
  Content,
  Container,
  Button,
  Right,
  Left,
  ListItem,
} from "native-base";
import InputSpinner from "react-native-input-spinner";

// Styles
import styles from "./styles";
import { render } from "react-dom";
import { connect } from "react-redux";
import { addItemToCart } from "../redux/actions";

class ProducDetail extends Component {
  state = { count: 0 };
  // state = {
  //   product: {
  //     id: 1,
  //     category: "Art",
  //     owner: "sara",
  //     name: "Cat painting",
  //     description: "Made with love",
  //     price: "100.00",
  //     quantity: 10,
  //     image1: "https://petra-drf.herokuapp.com/media/cat.jpg",
  //     image2: null,
  //     image3: null,
  //   },
  //   count: 0,
  // }; ///{product:{}, count:0}
  handlerState(product) {
    this.setState({ product }); //item , count
  }
  render() {
    const { item } = this.props.route.params;
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
                </Body>
              </CardItem>
            </Card>

            <ListItem>
              <Left>
                <Text>{item.description}</Text>
              </Left>
              {/* <Right> */}
              <Text>price: {item.price}$</Text>
              {/* </Right> */}
            </ListItem>
            <ListItem>
              <Left>
                <InputSpinner
                  max={10}
                  min={1}
                  step={1}
                  colorMax={"#094763"}
                  colorMin={"#5e8394"}
                  value={this.state.count}
                  onChange={(count) => {
                    this.setState({ count });
                  }}
                />
              </Left>
              <Text></Text>
              <Right>
                <Button
                  full
                  info
                  onPress={() =>
                    // this.handlerState(item) ||
                    this.props.addItemToCart(item.id, this.state.count)
                  }
                >
                  <Text>Buy Now</Text>
                </Button>
              </Right>
            </ListItem>
          </View>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (itemID, count) => dispatch(addItemToCart(itemID, count)),
});

export default connect(null, mapDispatchToProps)(ProducDetail);
// export default ProducDetail;
