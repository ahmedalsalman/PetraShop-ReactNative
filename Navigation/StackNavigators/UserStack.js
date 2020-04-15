import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
// Screens
import { LOGIN, SIGNUP, PROFILE } from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Home from "../../Components/Home";
// import Profile from "../../Components/Profile";

// Config
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

const UserStack = ({ user }) => {
  return (
    <Navigator initialRouteName={LOGIN} screenOptions={screenOptions}>
      {user ? (
        <Screen name="Home" component={Home} /> {/* HOME should be a screenName exported from screenNames.js */}
      ) : (
        <>
          <Screen
            name={LOGIN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Screen
            name={SIGNUP}
            component={Signup}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Navigator>
  );
};
const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(UserStack);
