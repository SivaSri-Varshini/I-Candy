import React from "react";
import { Image, View, FlatList, Dimensions } from "react-native";

import AppScreen from "../components/AppScreen";

const { width, height } = Dimensions.get("window");
const imageWidth = width;
const imageHeight = height / 2;

function FavoritesScreen({ route }) {
  const favImages = route.params;

  return (
    <AppScreen style={{ paddingTop: 0 }}>
      <FlatList
        data={favImages}
        keyExtractor={({ index, item }) =>
          index +
          new Date().getTime().toString() +
          Math.floor(
            Math.random() * Math.floor(new Date().getTime())
          ).toString()
        }
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              height: imageHeight,
              width: imageWidth,
            }}
          >
            <Image
              style={{
                height: "100%",
                width: "100%",
                overflow: "hidden",
                borderRadius: 20,
              }}
              source={{ uri: item }}
            ></Image>
          </View>
        )}
      />
    </AppScreen>
  );
}

export default FavoritesScreen;
