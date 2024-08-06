import React, { useEffect } from "react";
import { ImageBackground, Dimensions, Text, View, Image} from "react-native";
import { StyledStatusBar } from "../components";
import { styles } from "../constants";
const APP_NAME = "tyche"
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../features/auth/authSlice";

function Splash({ navigation }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser);
    const unsubscribe = setTimeout(() => {
      navigation.replace("Welcome");
    }, 3000);
    return () => {
      clearTimeout(unsubscribe);
    };
  }, [user]);

  return (
    <ImageBackground
      source={require("../assets/images/splash.png")}
      style={styles.container}
    >
    </ImageBackground>
  );
}

export default Splash;
