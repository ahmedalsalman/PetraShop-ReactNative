import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../redux/actions";
// Screen Names
import { LOGIN, SHOP, PRODUCTSHOPS } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

class Signup extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  render() {
    const { navigation } = this.props;
    const { username, password, first_name, last_name, email } = this.state;
    const goToCoffeeList = () =>
      navigation.navigate(SHOP, { screen: PRODUCTSHOPS });
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          value={username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="First Name"
          placeholderTextColor="#A6AEC1"
          value={first_name}
          onChangeText={(first_name) => this.setState({ first_name })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Last Name"
          placeholderTextColor="#A6AEC1"
          value={last_name}
          onChangeText={(last_name) => this.setState({ last_name })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Email"
          placeholderTextColor="#A6AEC1"
          value={email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => this.props.signup(this.state, goToCoffeeList)}
        >
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(LOGIN)}
        >
          Click here to log in!
        </Text>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  signup: (userData, goToCoffeeList) =>
    dispatch(signup(userData, goToCoffeeList)),
});
export default connect(null, mapDispatchToProps)(Signup);
