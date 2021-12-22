import React from "react";
import { View, StyleSheet } from "react-native";

import AppTextInput from "./AppTextInput";
import SaveButton from "./SaveButton";
import colors from "../config/colors";

function AddCategory({ onChangeText, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <AppTextInput
          onChangeText={onChangeText}
          placeholder="Type Category Name"
        />
      </View>
      <SaveButton onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.purple,
    borderRadius: 12,
    marginBottom: 40,
    elevation: 5,
  },

  textInputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default AddCategory;
