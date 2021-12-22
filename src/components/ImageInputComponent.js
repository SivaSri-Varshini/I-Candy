import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";

function ImageInputComponent({
  imageUri,
  handleButtonPress,
  handleImagePress,
  imgSource,
  buttonName,
}) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleImagePress}
        style={styles.container}
      >
        {!imageUri && (
          <TouchableOpacity onPress={handleButtonPress}>
            <Image
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
              source={imgSource}
            />
          </TouchableOpacity>
        )}

        {imageUri && (
          <Image style={styles.imageStyles} source={{ uri: imageUri }} />
        )}
      </TouchableOpacity>

      <Text style={styles.text}>{buttonName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: colors.purple,
    borderRadius: 5,
    overflow: "hidden",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  imageStyles: {
    height: "100%",
    width: "100%",
  },
  text: {
    color: "#74849E",
    fontSize: 10,
    textAlign: "center",
    fontWeight: "600",
    paddingBottom: 5,
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 6,
    elevation: 5,
  },
});

export default ImageInputComponent;
