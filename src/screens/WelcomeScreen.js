import React from "react";
import { StyleSheet, Image, View } from "react-native";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";

export default function WelcomeScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
          resizeMode="cover"
        ></Image>
      </View>
      <View style={styles.buttonContainer}>
        <AppText style={{ fontWeight: "bold", fontSize: 18 }}>
          WELCOME !
        </AppText>
        <AppText style={styles.text}>
          Categorize you photos for easy and smooth access. Enjoy an amazing
          experience with I-Candy. We are excited to have you on-board.
        </AppText>
        <AppButton
          onPress={() => navigation.navigate("Tab")}
          title="Get Started"
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "55%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    justifyContent: "space-between",
  },
  logo: {
    height: "100%",
  },
  logoContainer: {
    height: "45%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 5.5,
  },

  text: {
    textAlign: "center",
    fontSize: 14,
  },
});
