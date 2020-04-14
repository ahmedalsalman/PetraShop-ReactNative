import React, { Component } from "react";

import { Icon } from "react-native";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import store from "./Redux";

const { Navigator, Screen } = createStackNavigator();
// const { Navigator, Screen } = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          {/* Your navigator should eventually move to its own file */}
          <Navigator initialRouteName="Home">
            <Screen name="Home" component={Home} />
            <Screen name="ProductList" component={ProductList} />
            <Screen name="ProductDetail" component={ProductDetail} />
          </Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}

export default App;
