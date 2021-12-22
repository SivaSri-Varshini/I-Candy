import React from "react";
import { Dimensions, View, Image, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

function ImageFullSize({ imageUri }) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{ width: "100%", height: "100%" }}
        source={{ uri: imageUri }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: "black",
  },
});
export default ImageFullSize;
