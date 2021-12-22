import React from "react";
import { View, StyleSheet } from "react-native";

import AppPicker from "./AppPicker";
import colors from "../config/colors";
import ImageInput from "./ImageInput";
import SaveButton from "./SaveButton";

function AddImage({
  placeholder,
  items,
  imageUri,
  selectedItem,
  onSelectItem,
  onChangeImage,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <AppPicker
        selectedItem={selectedItem}
        onSelectItem={onSelectItem}
        placeholder={placeholder}
        items={items}
      />

      <View style={styles.subContainer}>
        <ImageInput imageUri={imageUri} onChangeImage={onChangeImage} />
      </View>

      <SaveButton onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pink,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
    elevation: 5,
  },

  subContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    backgroundColor: colors.purple,
    marginHorizontal: 20,
  },

  textInput: {
    marginVertical: 15,
  },
});

export default AddImage;
