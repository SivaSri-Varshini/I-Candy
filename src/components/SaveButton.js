import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

function SaveButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <AppText style={styles.text}>Save</AppText>
      <MaterialIcons name="save" size={17} color={colors.grey} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    width: 100,
    height: 40,
    backgroundColor: colors.purple,
    borderRadius: 30,
    borderColor: "pink",
    borderWidth: 1,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    flexDirection: "row",
  },
  text: {
    marginRight: 5,
    fontSize: 15,
    color: colors.grey,
  },
});
export default SaveButton;
