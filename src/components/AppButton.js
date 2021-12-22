import { TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";

import colors from "../config/colors";

function AppButton({ title, buttonStyle, titleStyle, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[styles.button, buttonStyle]}
    >
      <Text style={[styles.title, titleStyle]}> {title} </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 45,
    backgroundColor: colors.purple,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 5,
  },
  title: {
    color: "black",
    fontSize: 18,
  },
});
export default AppButton;
