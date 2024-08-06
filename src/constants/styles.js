import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";
import sizes from "./sizes";

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color : "#0F4037"
  },
  signText:{
    fontSize: 18,
    fontFamily: "AverageSans",
  },
  splashText: {
    color: "#fff",
    fontSize: 48,
    fontFamily: "Nunito-Bold",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  textPrimary: {
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 18,
    fontFamily: "Nunito-Bold",
  },
  textSecondary: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 18,
    fontFamily: "Nunito-Bold",
  },
  buttonContainerSecondary: {
    backgroundColor: colors.secondary,
    height: sizes.buttonHeight,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonPrimary: {
    backgroundColor: colors.white,
    height: sizes.buttonHeight,
    width: sizes.width,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: sizes.margin,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    height: sizes.buttonHeight,
    width: sizes.width,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: sizes.margin,
  },
  text: {
    subtitle: {
      fontSize: 20,
      fontFamily: "Nunito-Bold",
      color: colors.white,
    },
    caption: {
      fontSize: 18,
      fontFamily: "Nunito-Bold",
      color: colors.white,
      marginVertical:8,
    },
    error: {
      fontSize: 16,
      fontFamily: "Nunito-Bold",
      color: colors.error,
      alignSelf:'flex-start',
      marginBottom:sizes.margin
    },
    title: {
      fontFamily: "Nunito-Bold",
      fontSize: 50, //42
      color: colors.white,
      textTransform: "uppercase",
    },
    heading: {
      fontFamily: "Nunito-Bold",
      color: colors.white,
      fontSize: 24,
      textTransform: "uppercase",
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: colors.white,
      fontFamily: "Nunito-Bold",
    },
  },
  icon: {
    container: {
      justifyContent: "center",
      alignContent: "center",
      marginHorizontal: sizes.margin,
    },
  },
  input: {
    width: sizes.width,
    // height: 42,
    padding: 8,
    marginBottom: 8,
    backgroundColor: "#fff4",
    borderRadius: 15,
    flexDirection: "row",
  },
  card: {
    image: {
      width: sizes.width,
      height: 120,
      marginVertical: 16,
      borderRadius: 15,
    },
    container: {},
  },
  header: {
    container: {
      flexDirection: "row",
      width: sizes.fullWidth,
      marginBottom: sizes.margin,
      height: 60,
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: sizes.margin,
    },
    icon: {
      backgroundColor: "#fff",
      padding: 8,
      paddingHorizontal: 10,
      margin: 8,
      borderRadius: 50,
    },
  },
  goButton: {
    container: {
      // width:20,
      // height:20,
      padding: 25,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      borderRadius: 50,
    },
    text: {
      color: colors.white,
      fontSize: 20,
      fontFamily: "Nunito-Bold",
    },
  },
});

export default styles;
