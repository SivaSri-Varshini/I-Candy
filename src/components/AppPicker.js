import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "./AppScreen";
import AppText from "./AppText";
import colors from "../config/colors";

function AppPicker({ items, placeholder, selectedItem, onSelectItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {selectedItem.label != undefined ? (
            <Text style={styles.pickerText}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.grey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <AppScreen
          style={{ justifyContent: "flex-end", backgroundColor: "transparent" }}
        >
          <View style={styles.modalContainer}>
            <Button
              title="Close"
              onPress={() => {
                setModalVisible(false);
              }}
            />
            <FlatList
              data={items}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.pickerItem}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                >
                  <AppText style={styles.text}>{item.label}</AppText>
                </TouchableOpacity>
              )}
            />
          </View>
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    marginHorizontal: 25,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: "#8e8e8e",
    flex: 1,
  },
  pickerItem: {
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 10,
    backgroundColor: colors.darkPink,
    margin: 2,
  },
  pickerText: {
    color: colors.grey,
    flex: 1,
  },
  text: { flex: 1, textAlign: "center", padding: 5 },

  modalContainer: {
    width: "100%",
    backgroundColor: colors.blue,
    justifyContent: "center",
  },
  button: {},
});

export default AppPicker;
