import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors, styles } from "../constants";

const { width } = Dimensions.get("screen");

function InputField({
  placeholder,
  returnKeyType,
  keyboardType,
  secureTextEntry,
  onBlur,
  onChangeText,
  icon
}) {
  const [visiblePassword, setVisiblePassword] = React.useState(true);

  const toggle = () => [];
  return (
    <View style={styles.input}>
      <View style={styles.icon.container}>
        {icon || <Entypo name={getIconName(keyboardType)} size={20} color="#ddd" />}
      </View>
      <TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        style={styles.text.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        placeholder={placeholder}
        placeholderTextColor={"#ddd"}
      />
      {/* {secureTextEntry && (
          <TouchableOpacity
            onPress={()=>setVisiblePassword(!visiblePassword)}
            style={styles.icon.container}
          >
            <Entypo
              name={`${visiblePassword ? "eye" : "eye-with-line"}`}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        )} */}
    </View>
  );
}

export default InputField;

const getIconName = (type) => {
  switch (type) {
    case "email-address":
      return "mail";
      break;

    default:
      return "lock";
      break;
  }
};
