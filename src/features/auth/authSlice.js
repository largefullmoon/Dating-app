import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  userInformation: {},
  message: "",
};
export const updateUserInformation = createAsyncThunk("auth/updateUserInformation", async (params, thunkAPI) => {
  try {
    return {"key" : params['key'], "value" : params['value']}
  } catch {
    return "update userinformation failed";
  }
}
);
//Register user
export const register = createAsyncThunk("auth/register", async (thunkAPI) => {
  try {
    return "ok"
    // return await authService.register(user);
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

export const getUser = createAsyncThunk("auth/user", async (thunkAPI) => {
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

//verify email
export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (payload, thunkAPI) => {
    try {
      return await authService.verifyEmail(payload);
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

//verify email
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserInformation.pending, (state, action) => {
        state.isLoading = true;
        isError = false
        isSuccess = false
        message = null
        user = null
      })
      .addCase(updateUserInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userInformation[action.payload.key] = action.payload.value
      })
      .addCase(updateUserInformation.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        isError = false
        isSuccess = false
        message = null
        user = null
      })
      .addCase(register.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.isSuccess = true;
        // state.user = action.payload;
        alert(JSON.stringify(state.userInformation))
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
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
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        // message = action.payload.message
        state.isError = false;
      })
      .addCase(verifyEmail.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        message = null;
        state.isError = false;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        message = action.payload;
        state.isError = true;
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
