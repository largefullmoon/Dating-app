import React from "react";
import { StatusBar } from "react-native";
import { colors } from "../constants";
function StyledStatusBar() {
  return (
    <StatusBar
      translucent
      backgroundColor={colors.primary}
      barStyle={"light-content"}
    />
  );
}

export default StyledStatusBar;
