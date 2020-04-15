import React, { Component } from "react";

import { Provider } from "react-redux";
// Navigation
import RootNavigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";

import store from "./Redux";

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </NavigationContainer>
    );
  }
}

export default App;
