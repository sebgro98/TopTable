import { StyleSheet } from "react-native";

export const stylesActive = StyleSheet.create({
    button: {
      backgroundColor: "orange",
      width: 100,
      padding: 10,
      margin: 5,
      borderRadius: 7,
      alignItems: "center",
      borderWidth: 1,
      borderColor: "white",
    },
    buttonText: {
      color: "white",
      fontSize: 20,
    },
  });

  export const stylesDormant = StyleSheet.create({
    button: {
      backgroundColor: "lightgrey",
      width: 100,
      padding: 10,
      margin: 5,
      borderRadius: 7,
      alignItems: "center",
    },
    buttonText: {
      color: "darkgrey",
      fontSize: 20,
    },
  });