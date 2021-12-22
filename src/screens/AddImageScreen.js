import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import AddCategory from "../components/AddCategory";
import AddImage from "../components/AddImage";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";

function AddImageScreen({ navigation }) {
  const [categories, setCategories] = useState([
    { label: "Animals" },
    { label: "Travel" },
    { label: "Friends" },
  ]);
  const [newCategory, setNewCategory] = useState({});
  const [imageUri, onChangeImage] = useState();
  const [selectedItem, onSelectItem] = useState({});
  const [listing, setListing] = useState([]);

  const handlePostButtonPress = () => {
    navigation.navigate("Home", listing);
  };

  return (
    <AppScreen style={{ paddingTop: 0 }}>
      <ScrollView
        contentContainerStyle={styles.innerContainer}
        showsVerticalScrollIndicator={false}
      >
        <AppText style={styles.text}>Add new categories</AppText>
        <AddCategory
          onPress={() => {
            var labels = newCategory.label;
            var re = /^[a-zA-Z ]{2,30}$/;
            const validateCategory = (labels) => {
              return re.test(labels);
            };

            if (
              !validateCategory(labels) ||
              labels == undefined ||
              labels == null ||
              labels == " "
            ) {
              alert("Invalid Input");
            } else {
              setCategories([...categories, newCategory]);
              alert("Saved");
            }
          }}
          onChangeText={(text) => {
            const temp = { label: text };
            setNewCategory(temp);
          }}
        ></AddCategory>
        <AppText style={styles.text}>
          Select a category and add an image
        </AppText>

        <AddImage
          placeholder="Select A Category"
          items={categories}
          imageUri={imageUri}
          onChangeImage={onChangeImage}
          selectedItem={selectedItem}
          onSelectItem={onSelectItem}
          onPress={() => {
            const newlist = {
              id: (listing.length + 1).toString(),
              category: selectedItem.label,
              imagesUrl: imageUri,
              like: false,
            };

            if (newlist.imagesUrl == null || newlist.category == null) {
              alert("Select category and image");
            } else {
              setListing([...listing, newlist]);
              alert("Image Saved");
            }
          }}
        ></AddImage>

        <AppButton onPress={() => handlePostButtonPress()} title="Confirm" />
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },

  text: {
    marginBottom: 10,
  },
});
export default AddImageScreen;
