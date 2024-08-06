import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../constants";

function GoButton({ children }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#ddffdd",
        padding: 25,
        borderRadius: 100,
      }}
    >
      <View
        style={{
          backgroundColor: "#99ff99",
          padding: 15,
          borderRadius: 50,
        }}
      >
        <View
          style={{ ...styles.goButton.container, backgroundColor: "green" }}
        >
          <Text style={styles.goButton.text}>GO</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default GoButton;
