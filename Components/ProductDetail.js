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
import Icon from "react-native-vector-icons/FontAwesome";

// Styles
import styles from "./styles";
import { render } from "react-dom";
import { connect } from "react-redux";
import { addItemToCart } from "../redux/actions";

class ProducDetail extends Component {
  state = { count: 1 };
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
                  <Text style={styles.text}>{item.name}</Text>

                  <Image
                    source={{ uri: item.image1 }}
                    style={{ width: 330, height: 270 }}
                  />
                </Body>
              </CardItem>
            </Card>

            <ListItem>
              <Left>
                <Text>{item.description}</Text>
              </Left>
              <Text>price: {item.price}$</Text>
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
              <Right>
                <Button
                  full
                  style={styles.button}
                  onPress={() =>
                    this.props.addItemToCart(item.id, this.state.count)
                  }
                >
                  <Icon name="shopping-bag" size={30} />
                  <Text style={styles.text3}>Buy Now</Text>
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
