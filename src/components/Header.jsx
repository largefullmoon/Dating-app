import React from "react";
import { View, Text } from "react-native";
const APP_NAME = "tyche"
import { colors, styles } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "./Icon";
import {  useDispatch } from "react-redux";
import { reset } from "../features/auth/authSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <View style={styles.header.container}>
      <Icon name="" onPress={() => console.log("Icon name clicked")}>
        <FontAwesome name="refresh" size={24} color={colors.primary} />
      </Icon>
      <Text style={styles.text.heading}>{APP_NAME}</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Icon name="" onPress={() => console.log("Icon name clicked")}>
          <Entypo name="help-with-circle" size={24} color="black" />
        </Icon>
        <Icon name="" onPress={() => console.log("Icon name clicked")}>
          <MaterialIcons name="cast" size={24} color="black" />
        </Icon>
        <Icon
          name=""
          onPress={() => {
            dispatch(reset());
          }}
        >
          <MaterialIcons name="logout" size={24} color="black" />
        </Icon>
      </View>
    </View>
  );
}

export default Header;
