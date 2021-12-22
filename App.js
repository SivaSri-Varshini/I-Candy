import React from "react";
import { StyleSheet, View } from "react-native";

import AddImageScreen from "./src/screens/AddImageScreen";
import HomeScreen from "./src/screens/HomeScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import colors from "./src/config/colors";
import ImageFullScreen from "./src/screens/ImageFullScreen";

export default function App() {
  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

  const ImageNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Favorites"
        component={FavoritesScreen}
      />

      <Stack.Screen
        options={{ headerShown: true }}
        name="Image FullScreen"
        component={ImageFullScreen}
      />
    </Stack.Navigator>
  );

  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );

  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#6E5773",
        tabBarInactiveTintColor: "#D291BC",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="HomeNavigator"
        component={ImageNavigator}
      />
      <Tab.Screen
        name="Add Image"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: "#fff",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                elevation: 3,
              }}
            >
              <MaterialCommunityIcons name="plus" size={25} color={color} />
            </View>
          ),
        }}
        component={AddImageScreen}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 15,
    backgroundColor: colors.purple,
    marginHorizontal: 15,
    marginVertical: 10,
    height: 60,
  },
});
