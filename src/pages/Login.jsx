import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import StyledTextInput from "../components/StyledTextInput";

const Login = () => {
  return (
    <View>
      <Text>working on Login</Text>
      <StyledTextInput placeholder="Email" />
      <StyledTextInput placeholder="Password" />
      <Button title="Log In"></Button>
    </View>
  );
};

export default Login;
