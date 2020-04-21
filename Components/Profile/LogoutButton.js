import React from "react";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
// import { LOGIN } from "../../Navigation/screenNames";
import { logout } from "../../redux/actions";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./styles";

const LogoutButton = ({ logout }) => (
  <Button full onPress={() => logout()} style={styles.button}>
    <Text>Logout</Text>
    <Icon name="logout" size={30} />
  </Button>
);
const mapDispatchToProps = { logout };
export default connect(null, mapDispatchToProps)(LogoutButton);
