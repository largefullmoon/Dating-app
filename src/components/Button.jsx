import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { colors, styles } from "../constants";

function Button({ children, onPress, type, loading }) {
  const { buttonPrimary, textPrimary, buttonSecondary, textSecondary } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={type == "primary" ? buttonPrimary : buttonSecondary}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={type == "primary" ? textPrimary : textSecondary}>
          {children.toUpperCase()}
        </Text>
      )}
    </TouchableOpacity>
  );
}
export default Button;
