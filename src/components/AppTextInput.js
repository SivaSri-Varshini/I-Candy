import React from "react";
import { TextInput, StyleSheet } from "react-native";

function AppTextInput({ placeholder, onChangeText, style }) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.textInput, style]}
      onChangeText={onChangeText}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    marginTop: 15,
    elevation: 5,
    borderRadius: 12,
    padding: 10,
  },
});

export default AppTextInput;
