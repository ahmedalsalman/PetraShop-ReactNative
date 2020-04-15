import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(218,245,255, .4)",
  },
  topStyling: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  homeTitle: {
    color: "#000000",
    fontSize: 28,
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "rgba(255, 255, 255, .6)",
  },
  listStyling: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyling: {
    justifyContent: "center",
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: "rgba(255, 255, 255, .2)",
  },
  buttonTextStyling: {
    fontSize: 30,
    backgroundColor: "rgba(255, 255, 255, .6)",
  },

  flavorList: {
    textAlign: "left",
    color: "#6C788E",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  icecreamImage: {
    height: 230,
    width: 350,
  },
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "transparent",
    color: "white",
    fontStyle: "italic",
    fontFamily: "Baskerville",
  },
});

export default styles;
