import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageInputComponent from "./ImageInputComponent";

function ImageInput({ imageUri, onChangeImage }) {
  const [showCam, setShowCam] = useState(true);
  const [showPicker, setShowPicker] = useState(true);

  const requestImagePermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };
  const requestCameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the Camera.");
  };

  useEffect(() => {
    requestImagePermission();
    requestCameraPermission();
  }, []);
  const imageSelection = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("error reading image", error);
    }
  };

  const cameraImageSelection = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("error reading image", error);
    }
  };

  const handleButtonPressPicker = () => {
    setShowCam(false);
    imageSelection();
  };
  const handleButtonPressCamera = () => {
    setShowPicker(false);
    cameraImageSelection();
  };

  const handleImagePress = () => {
    if (imageUri)
      Alert.alert("Delete", "Do you want to delete the image?", [
        {
          text: "Yes",
          onPress: () => {
            onChangeImage(null);
            setShowCam(true);
            setShowPicker(true);
          },
        },
        { text: "No" },
      ]);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      {showCam && (
        <ImageInputComponent
          imgSource={require("../assets/addImage.png")}
          handleButtonPress={handleButtonPressCamera}
          handleImagePress={handleImagePress}
          buttonName="Use Camera"
          imageUri={imageUri}
        />
      )}
      {showPicker && (
        <ImageInputComponent
          imgSource={require("../assets/addImagePicker.png")}
          handleButtonPress={handleButtonPressPicker}
          handleImagePress={handleImagePress}
          buttonName="Use Picker"
          imageUri={imageUri}
        />
      )}
    </View>
  );
}

export default ImageInput;
