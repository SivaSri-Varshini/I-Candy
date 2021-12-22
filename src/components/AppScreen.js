import React from "react";

import colors from "../config/colors";
import {
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
} from "react-native";

export default function AppScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={[styles.childContainer, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  childContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
