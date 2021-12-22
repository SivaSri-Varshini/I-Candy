import React, { useState } from "react";
import {
  FlatList,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FAB } from "react-native-elements";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppScreen from "../components/AppScreen";
import colors from "../config/colors";

function HomeScreen({ navigation, route }) {
  const listing = route.params;
  const uniqueTags = [];
  const [favImageUris, setfavImageuris] = useState([]);
  let bg = [colors.blue, colors.darkPink, colors.yellow];

  {
    listing &&
      listing.map((item) => {
        var findItem = uniqueTags.find((x) => x.category === item.category);
        if (!findItem) uniqueTags.push(item);
      });
  }

  const categories = uniqueTags.map(({ category }) => {
    return { label: category };
  });

  return (
    <AppScreen>
      <FAB
        color={colors.secondary}
        onPress={() => navigation.navigate("Favorites", favImageUris)}
        style={{
          position: "absolute",
          top: 10,
          right: 5,
        }}
        iconPosition="top"
        title="Favorites"
        titleStyle={{ fontSize: 10, color: colors.primary }}
        icon={
          <View>
            <AntDesign name="heart" size={24} color="#d07c7c" />
          </View>
        }
      />

      <View style={{ paddingTop: 30 }}>
        {!(listing == null || listing == undefined || listing.length == 0) ? (
          <FlatList
            data={categories}
            keyExtractor={({ index, item }) =>
              index +
              new Date().getTime().toString() +
              Math.floor(
                Math.random() * Math.floor(new Date().getTime())
              ).toString()
            }
            renderItem={({ item, index }) => (
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <AppText style={{ margin: 10, fontWeight: "bold" }}>
                  {item.label}
                </AppText>
                <View
                  style={{
                    width: "100%",
                    backgroundColor: bg[index % bg.length],
                    elevation: 10,
                  }}
                >
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: "row" }}>
                      {listing
                        .filter((list) => list.category == item.label)
                        .map((list) => (
                          <View
                            key={
                              "key" +
                              Math.floor(
                                Math.random() * Math.floor(new Date().getTime())
                              ).toString()
                            }
                            style={{
                              flexDirection: "row",
                            }}
                          >
                            <View>
                              <TouchableOpacity
                                style={{
                                  width: 150,
                                  height: 180,
                                  borderRadius: 10,
                                  overflow: "hidden",
                                  margin: 10,
                                  elevation: 10,
                                }}
                                onPress={() => {
                                  navigation.navigate(
                                    "Image FullScreen",
                                    list.imagesUrl
                                  );
                                }}
                              >
                                <Image
                                  source={{ uri: list.imagesUrl }}
                                  resizeMode="cover"
                                  style={{
                                    height: "100%",
                                    width: "100%",
                                  }}
                                />
                              </TouchableOpacity>

                              <AppButton
                                title="Add to favs"
                                titleStyle={{ fontSize: 10 }}
                                buttonStyle={{
                                  width: 70,
                                  height: 30,
                                  alignSelf: "center",
                                }}
                                onPress={() => {
                                  setfavImageuris([
                                    ...favImageUris,
                                    list.imagesUrl,
                                  ]);
                                  alert("Image added to favs");
                                }}
                              />
                            </View>
                          </View>
                        ))}
                    </View>
                  </ScrollView>
                </View>
              </View>
            )}
          />
        ) : (
          <AppText>Add Images To View!!</AppText>
        )}
      </View>
    </AppScreen>
  );
}

export default HomeScreen;
