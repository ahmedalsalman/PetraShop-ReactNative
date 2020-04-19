import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductList from "../../Components/ProductList";
import ProductDetail from "../../Components/ProductDetail";
import Home from "../../Components/Home";
import Catogries from "../../Components/Catogries/index";

// Config
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

function ShopStack() {
  return (
    <Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Screen name="Home" component={Home} />
      <Screen name="Catogries" component={Catogries} />

      <Screen name="ProductList" component={ProductList} />
      <Screen name="ProductDetail" component={ProductDetail} />
    </Navigator>
  );
}

export default ShopStack;
