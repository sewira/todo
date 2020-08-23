import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddItem = ({ addItem }) => {
  const [text, setText] = React.useState("");

  onChange = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item.."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText} onPress={() => addItem(text)}>
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
  },
});
