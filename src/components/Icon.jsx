import React from "react";
import { TouchableOpacity } from "react-native";
import { colors, styles } from "../constants";
import { FontAwesome } from "@expo/vector-icons";

function Icon({children, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.header.icon}>
      {children}
    </TouchableOpacity>
  );
}

export default Icon;
