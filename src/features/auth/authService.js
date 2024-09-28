import axios from "axios";
const BASE_URL = "https://pumped-stirred-emu.ngrok-free.app";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import io from 'socket.io-client';
// const socket = io(BASE_URL);
const register = async (userData) => {
  const response = await axios.post(`${BASE_URL}/registerUser`, userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  await AsyncStorage.setItem("user", JSON.stringify(userData));
  const user = await AsyncStorage.getItem('user')
  console.log("AsyncStorage.getItem('user')", user)
  return userData;
};

//Login user
const login = async (userData) => {
  const response = await axios.post(`${BASE_URL}/login`, userData);
  if (await response.data) {
    try {
      const jsonValue = JSON.stringify(response.data);
      await AsyncStorage.setItem("user", jsonValue);
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

const chatwithAI = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/chatwithAI`, data);
    if (await response) {
      try {
        return response.data.message; Moo
      } catch (error) {
        return error;
      }
    }
  } catch (e) {
    return e;
  }
}

const getChatUsers = async (userData) => {
  const response = await axios.post(`${BASE_URL}/getChatUsers`, userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response.data.data)
}

const chatwithUser = async (chatData) => {
  try {
    socket.emit('chatwithUser', chatData);
  } catch (e) {
    reject(e);
  }
  return
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
const verifyPhoneNumber = async (userData) => {
  const response = await axios.post(`${BASE_URL}/verifyPhoneNumber`, userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (await response) {
    try {
      return response.data.message;
    } catch (error) {
      return error;
    }
  }
};

//Reset password
const resetPassword = async (userData) => {
  const response = await axios.post(`${BASE_URL}/reset_password`, userData);
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
const uploadPhoto = async (params) => {
  const formData = new FormData();
  const file = params['file']
  formData.append('file', {
    uri: file.uri, // The local path of the file
    name: file.name || 'photo.jpg', // Optional file name
    type: file.type || 'image/jpeg', // Optional MIME type
  });
  formData.append("email", params['email'])
  try {
    const response = await axios.post(`${BASE_URL}/uploadPhoto`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error(error);
  }
};
const agreeTerms = async (userData) => {
  const response = await axios.post(`${BASE_URL}/agreeTerms`, userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

const getPhotoList = async (userData) => {
  const response = await axios.post(`${BASE_URL}/getPhotoList`, userData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data.photos;
};

const selectPlan = async (params) => {
  const response = await axios.post(`${BASE_URL}/selectPlan`, params);
  return response.data.plan;
};


const authService = {
  register,
  login,
  logout,
  getUser,
  forgotPassword,
  resetPassword,
  getAIChatHistory,
  getChatUsers,
  chatwithAI,
  chatwithUser,
  agreeTerms,
  verifyPhoneNumber,
  uploadPhoto,
  getPhotoList,
  selectPlan
};

export default authService;
