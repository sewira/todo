import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [items, setItems] = React.useState([
    { id: 1, food: "Pancong" },
    { id: 2, food: "Bubur" },
    { id: 3, food: "Ketoprak" },
    { id: 4, food: "Gado-gado" },
  ]);

  addItem = (food) => {
    setItems([{ id: Math.random(), food }, ...items]);
  };

  deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <AddItem addItem={addItem} />
      <View style={styles.listItem}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ListItem item={item} key={item.id} deleteItem={deleteItem} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
