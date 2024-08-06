import { Alert } from "react-native";
import { LOGIN_URI } from "../constants";

export const login = (loginInput) => {
  const { username, password } = loginInput;
  return (dispatch) => {
    // don't forget to use dispatch here!
    return fetch(LOGIN_URI, {
      method: "POST",
      headers: {
        // these could be different for your API call
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInput),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        Alert.alert("Login Failed", "Some error occured, please retry");
        console.log(err);
      });
  };
};
