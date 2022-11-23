import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    width: 250,
  },
});

const StyledTextInput = ({ style = {}, ...props }) => {
  const inputStyle = {
    ...styles.textInput,
    ...style,
  };
  return <TextInput style={inputStyle} {...props} />;
};

export default StyledTextInput;
