import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Component
import ProductCart from "../../Components/ProductCart";

// Config
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

export default function CartStack() {
  return (
    <Navigator initialRouteName="ProductCart" screenOptions={screenOptions}>
      <Screen name="ProductCart" component={ProductCart} />
    </Navigator>
  );
}
