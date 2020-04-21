import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#330033",
    fontSize: 25,
    fontWeight: "bold",
    opacity: 1,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,

    opacity: 0.5,
    backgroundColor: "black",
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 180,
    flexDirection: "row",
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 200,
    // flexDirection: "row",
  },
  thumbnail: {
    backgroundColor: "white",
    opacity: 1,
  },
  background: {
    width: null,
    // height: 400,
    flex: 1,
  },
});
export default styles;
