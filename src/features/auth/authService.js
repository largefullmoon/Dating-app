import axios from "axios";
const BASE_URL = "https://in-enough-yak.ngrok-free.app";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Register user
const register = async (userData) => {
  userData.userInformation['phoneNumber'] = userData.phoneNumner
  const response = await axios.post(`${BASE_URL}/registerUser`, userData.userInformation);
  if (await response.data) {
    try {
      await AsyncStorage.setItem("@user", JSON.stringify(response.data));
    } catch (e) {
      throw new Error(e);
    }
  }
  return response.data;
};

//Login user
const login = async (userData) => {
  const response = await axios.post(`${BASE_URL}/login`, userData);
  if (await response.data) {
    try {
      const jsonValue = JSON.stringify(response.data);
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (e) {
      // saving error
      return e;
    }
  }

  return response.data;
};

//Logout user
export const logout = async () => {
  try {
    await AsyncStorage.setItem("@user", null);
  } catch (e) {
    throw new Error(e);
  }
};

const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return e;
  }
};

//Forgot password
const forgotPassword = async (userData) => {
  const response = await axios.post(`${BASE_URL}/forgot_password`, userData);
  if (await response) {
    try {
      return response.data.message;
    } catch (error) {
      return error;
    }
  }
};

//Register user
const verifyEmail = async (userData) => {
  const response = await axios.put(`${BASE_URL}/verifyEmail`, userData);
  if (await response.data) {
    try {
      await AsyncStorage.setItem("@user", JSON.stringify(response.data));
    } catch (e) {
      // saving error

      throw new Error(e);
    }
  }

  return response.data;
};

//Reset password
const resetPassword = async (userData) => {
  const response = await axios.put(`${BASE_URL}/reset_password`, userData);
  if (await response.data) {
    try {
      await AsyncStorage.setItem("@user", JSON.stringify(response.data));
    } catch (e) {
      // saving error

      throw new Error(e);
    }
  }

  return response.data;
};

const authService = {
  register,
  login,
  logout,
  getUser,
  forgotPassword,
  resetPassword,
  verifyEmail,
};

export default authService;
