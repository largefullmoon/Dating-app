import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import AsyncStorage from '@react-native-async-storage/async-storage';
// AsyncStorage.getItem("user") ? AsyncStorage.getItem("user") : 
const initialState = {
  user: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  userInformation: {},
  message: "",
  chatUsers: [
    { "name": "Beyazıt", "lastMessage": "Oturuyorum sen napıyosunn", "photo": "1.png" },
    { "name": "Murat", "lastMessage": "Selamm", "photo": "1.png" },
    { "name": "Oğuz", "lastMessage": "Akrep seninn", "photo": "1.png" }
  ],
  photoList: [],
};
export const updateUserInformation = createAsyncThunk("auth/updateUserInformation", async (params, thunkAPI) => {
  try {
    return { "key": params['key'], "value": params['value'] }
  } catch {
    return "update userinformation failed";
  }
}
);
export const selectPlan = createAsyncThunk("auth/selectPlan", async (params, thunkAPI) => {
  try {
    return await authService.selectPlan(params);
  } catch {
    return "update userinformation failed";
  }
}
);

export const setChatUser = createAsyncThunk("auth/setChatUser", async (chatUser, thunkAPI) => {
  try {
    return { "key": "chatUser", "value": chatUser}
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
}
);
// 
//Register user
export const register = createAsyncThunk("auth/register", async (userInformation, thunkAPI) => {
  try {
    return await authService.register(userInformation);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
}
);

//Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
  try {
    return await authService.logout();
  } catch (error) {
    const message =
      (error.response && error.response.data && response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getAIChatHistory = createAsyncThunk("auth/getAIChatHistory", async (thunkAPI) => {
  try {
    return await authService.getAIChatHistory();
  } catch (error) {
    const message =
      (error.response && error.response.data && response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})
export const getChatUsers = createAsyncThunk("auth/getChatUsers", async (userData, thunkAPI) => {
  try {
    return await authService.getChatUsers(userData);
  } catch (error) {
    const message =
      (error.response && error.response.data && response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

export const chatwithAI = createAsyncThunk("auth/chatwithAI", async (data, thunkAPI) => {
  try {
    return await authService.chatwithAI(data);
  } catch (error) {
    const message =
      (error.response && error.response.data && response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

export const chatwithUser = createAsyncThunk("auth/chatwithUser", async (chatData, thunkAPI) => {
  try {
    return await authService.chatwithUser(chatData);
  } catch (error) {
    const message =
      (error.response && error.response.data && response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})
export const getUser = createAsyncThunk("auth/getUser", async (thunkAPI) => {
  try {
    let userString = AsyncStorage.getItem("@user")
    const userObject = JSON.parse(userString);
    const nestedUserInformation = JSON.parse(userObject._j);
    let user = nestedUserInformation.userInformation
    user['phoneNumber'] = nestedUserInformation.phoneNumber
    return user;
  } catch (error) {
    return {}
  }
});


export const Info = createAsyncThunk("auth/user", async (thunkAPI) => {
  try {
    return await authService.getUser();
  } catch (error) {
    const message =
      (error.response && error.response.data && response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//Forgot password
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      return await authService.forgotPassword(email);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const verifyPhoneNumber = createAsyncThunk(
  "auth/verifyPhoneNumber",
  async (data, thunkAPI) => {
    try {
      return await authService.verifyPhoneNumber(data);
    } catch (error) {
      return "failed to verify code";
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (payload, thunkAPI) => {
    try {
      return await authService.resetPassword(payload);
    } catch (error) {
      console.log(error.response.data.message);
      const message =
        (error.response && error.response.data && response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const uploadPhoto = createAsyncThunk(
  "auth/uploadPhoto",
  async (payload, thunkAPI) => {
    try {
      return await authService.uploadPhoto(payload);
    } catch (error) {
      console.log(error.response.data.message);
      const message =
        (error.response && error.response.data && response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const agreeTerms = createAsyncThunk(
  "auth/agreeTerms",
  async (payload, thunkAPI) => {
    try {
      return await authService.agreeTerms(payload);
    } catch (error) {
      console.log(error.response.data.message);
      const message =
        (error.response && error.response.data && response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPhotoList = createAsyncThunk(
  "auth/getPhotoList",
  async (payload, thunkAPI) => {
    try {
      return await authService.getPhotoList(payload);
    } catch (error) {
      console.log(error.response.data.message);
      const message =
        (error.response && error.response.data && response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
      state.user = null;
      state.userInformation = null;
      state.chatUsers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserInformation.fulfilled, (state, action) => {
        state.userInformation[action.payload.key] = action.payload.value
      })
      .addCase(setChatUser.fulfilled, (state, action) => {
        state.user[action.payload.key] = action.payload.value
        AsyncStorage.setItem('@user', state.user)
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        isError = false
        isSuccess = false
        message = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(agreeTerms.pending, (state) => {
        state.status = "pending"
        state.message = "saving..."
      })
      .addCase(agreeTerms.fulfilled, (state, action) => {
        state.status = "success"
        state.message = "saved"
      })
      .addCase(agreeTerms.rejected, (state, action) => {
        state.status = "error"
        state.message = "rejected"
      })
      .addCase(uploadPhoto.pending, (state) => {
        state.status = "pending"
        state.message = "saving..."
      })
      .addCase(uploadPhoto.fulfilled, (state, action) => {
        state.status = "success"
        state.message = "saved"
      })
      .addCase(uploadPhoto.rejected, (state, action) => {
        state.status = "error"
        state.message = "rejected"
      })
      .addCase(getPhotoList.pending, (state) => {
        state.status = "pending"
        state.message = "saving..."
      })
      .addCase(getPhotoList.fulfilled, (state, action) => {
        state.status = "success"
        state.message = "saved"
        state.photoList = action.payload
      })
      .addCase(getPhotoList.rejected, (state, action) => {
        state.status = "error"
        state.message = "rejected"
      })
      .addCase(getChatUsers.pending, (state) => {
        state.status = "pending"
        state.message = "saving..."
      })
      .addCase(getChatUsers.fulfilled, (state, action) => {
        state.status = "success"
        state.message = "saved"
        state.chatUsers = action.payload
      })
      .addCase(getChatUsers.rejected, (state, action) => {
        state.status = "error"
        state.message = "rejected"
        state.chatUsers = []
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.isSuccess = false;
        state.isError = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state, action) => (state.user = null))
      .addCase(getUser.fulfilled, (state) => {
        state.user = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
        message = action.payload;
        state.isError = false;
      })
      .addCase(verifyPhoneNumber.pending, (state, action) => {
        state.isSuccess = false;
      })
      .addCase(verifyPhoneNumber.fulfilled, (state, action) => {
        if(action.payload == "success"){
          state.isSuccess = true;
          state.user['isVerified'] = true;
          AsyncStorage.setItem("@user", JSON.stringify(state.user));
        }else{
          state.isSuccess = false;
        }
      })
      .addCase(verifyPhoneNumber.rejected, (state, action) => {
        state.isSuccess = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        // message = action.payload.message
        state.isError = false;
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        message = null;
        state.isError = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        message = action.payload;
        state.isError = true;
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
