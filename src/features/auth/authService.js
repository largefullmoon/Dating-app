import axios from "axios";
const BASE_URL = "https://in-enough-yak.ngrok-free.app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import io from 'socket.io-client';
//Register user
const socket = io(BASE_URL);
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

const getAIChatHistory = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/getAIChatHistory`, userData);
    if (await response) {
      try {
        return response.data.message;
      } catch (error) {
        return error;
      }
    }
  } catch (e) {
    return e;
  }
};

const chatwithAI = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/chatwithAI`, userData);
    if (await response) {
      try {
        return response.data.message;
      } catch (error) {
        return error;
      }
    }
  } catch (e) {
    return e;
  }
}

const getChatUsers = async () => {
  return new Promise((resolve, reject) => {
    try {
      // Emit the message to the server
      socket.emit('message', message);

      // Listen for the response from the server
      socket.on('response', (data) => {
        resolve(data);  // Resolve the promise with the received data
      });

      // Optionally, handle other socket events like errors
      socket.on('error', (error) => {
        reject(error);  // Reject the promise if there is an error
      });
    } catch (e) {
      reject(e);  // Reject the promise in case of other errors
    }
  });
}

const chatwithUser = async () => {
  const response = await axios.post(`${BASE_URL}/chatwithUser`, userData);
  if (await response) {
    try {
      return response.data.message;
    } catch (error) {
      return error;
    }
  }
}

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
  getAIChatHistory,
  getChatUsers,
  chatwithAI,
  chatwithUser
};

export default authService;
