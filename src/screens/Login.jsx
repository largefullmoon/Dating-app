import React, { useEffect } from "react";
import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  InputField,
  Container,
  Subtitle,
  Title,
  Error,
} from "../components";
import { styles } from "../constants";
const APP_NAME = "tyche"
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

function Login({ navigation }) {
  const dispatch = useDispatch();
  const { isLoading, user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (user) {
      navigation.replace("Welcome");
    }
    if (message) {
      ToastAndroid.show(message, 5000);
    }
  }, [user, isLoading, isSuccess, message, isError]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(v) => dispatch(login(v))}
      validationSchema={loginValidationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ImageBackground
            style={styles.container}
            source={require("../assets/images/splash.png")}
          >
            <Container>
              <Subtitle>Welcome to</Subtitle>
              <Title>{APP_NAME}</Title>
            </Container>
            <Container>
              <InputField
                onBlur={handleBlur("email")}
                style={styles.textInput}
                keyboardType="email-address"
                returnKeyType="next"
                placeholder={"Email"}
                onChangeText={handleChange("email")}
              />
              {errors.email && <Error>{errors.email}</Error>}
              <InputField
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                style={styles.textInput}
                placeholder={"Password"}
                secureTextEntry
              />
              {errors.password && <Error>{errors.password}</Error>}
              <Button loading={isLoading} onPress={handleSubmit}>Sign in</Button>
              <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
                <Text style={styles.text.caption}>Forgotton password?</Text>
              </TouchableOpacity>
            </Container>
          </ImageBackground>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
}

export default Login;
