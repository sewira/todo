import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-Icons";

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listVIew}>
        <Text style={styles.textItem}>{item.food}</Text>

        <Text style={styles.delText} onPress={() => deleteItem(item.id)}>
          X
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: "#eee",
  },
  listVIew: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    fontSize: 25,
  },

  delText: {
    fontSize: 30,
    color: "red",
  },
});
