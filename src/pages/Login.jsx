import React from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import StyledTextInput from "../components/StyledTextInput";

const Login = () => {
  return (
    <View>
      <Text style={styles.Icon}>working on Login</Text>
      <StyledTextInput placeholder="Email" />
      <StyledTextInput placeholder="Password" />
      <Button title="Sing In"></Button>
      <View style={styles.textButtons}>
        <Text
          onPress={() => {
            console.log("click");
          }}
        >
          Create Account
        </Text>
        <Text>Forgot Password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Icon: {
    alignSelf: "center",
  },
  textButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Login;
