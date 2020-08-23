import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.BgView}>
      <Text style={styles.header}>Makanan Ku</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  BgView: {
    height: 50,
    backgroundColor: "tomato",
    padding: 15,
  },
  header: {
    fontSize: 25,
    textAlign: "center",
  },
});

export default Header;
