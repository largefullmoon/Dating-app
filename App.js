import React, { useState, useEffect } from "react";
import { MainRoute, MasterRoute } from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { fonts } from "./src/constants";
import * as SplashScreen from "expo-splash-screen";
import { StyledStatusBar } from "./src/components";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

export default function App({ navigation }) {
  const [fontsLoaded] = useFonts(fonts);
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StyledStatusBar />
        <MainRoute />
      </NavigationContainer>
    </Provider>
  );
}
