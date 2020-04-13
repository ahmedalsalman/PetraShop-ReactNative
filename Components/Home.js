import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { Button } from "native-base";

// Styles
import styles from "./styles";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://previews.123rf.com/images/melaninaevgeniya/melaninaevgeniya1804/melaninaevgeniya180400022/100018072-%D1%81raft-workspace-concept-feminine-workplace-in-flat-lay-style-with-laptop-and-materials-for-handmade-.jpg",
      }}
      style={styles.container}
    >
      <View style={styles.overlayContainer}>
        <View style={styles.topStyling}>
          <Text style={styles.homeTitle}>Petra Shop</Text>
          <Button
            transparent
            light
            style={styles.buttonStyling}
            onPress={() => navigation.navigate("ProductList")}
          >
            <Text style={styles.buttonTextStyling}>Shop</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
