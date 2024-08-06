import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

function SocialBar() {
  return (
    <View>
      <TouchableOpacity>
        <AntDesign name="google" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="apple1" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default SocialBar;
