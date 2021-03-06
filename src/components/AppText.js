import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.grey,
  },
});

export default AppText;
