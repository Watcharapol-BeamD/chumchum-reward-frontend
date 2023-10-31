// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { liffApiInstance } from "../../services/liffApi";
import { decodeUser } from "../../services/jwtTokenService.js";

const initialState = {
  isRegisterPass: false,
  msg: "",
  isRegister: false,
  tokenMsg: "",
  user: localStorage.getItem("refresh_token") ? decodeUser(localStorage.getItem("refresh_token")) : [],
  accessToken: localStorage.getItem("access_token")? localStorage.getItem("access_token"): null,
  refreshToken: localStorage.getItem("refresh_token")? localStorage.getItem("refresh_token"): null,   
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    console.log(userData);
    try {
      const res = await liffApiInstance.post(`user/register`, userData);
      // console.log(res);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const checkUserRegister = createAsyncThunk(
  "auth/checkUserRegister",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await liffApiInstance.post(`user/is_register`, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRefreshToken = createAsyncThunk(
  "user/getRefreshToken",
  async (arg, { rejectWithValue }) => {
    try {
      const token = await localStorage.getItem("refresh_token");
      if (!token) {
        throw new Error("Token not found");
      }
      // 2nd parameter is body if empty set it to {}
      const res = await userApiInstance.post(
        `/refresh_token`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.msg = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.msg = action.payload.msg;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.isRegisterPass = action.payload.isRegisterPass;
        //----------- keep token to storage ---------------
        localStorage.setItem("access_token", action.payload.access_token);
        localStorage.setItem("refresh_token", action.payload.refresh_token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.msg = action.payload.msg;
        state.isRegisterPass = action.payload.isRegisterPass;
      })
      .addCase(checkUserRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkUserRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRegister = action.payload.isRegister;
      })
      .addCase(checkUserRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isRegister = action.payload.isRegister;
      })
      .addCase(getRefreshToken.pending, (state) => {
        state.tokenMsg = null;
      })
      .addCase(getRefreshToken.fulfilled, (state, action) => {
        state.tokenMsg = action.payload.msg;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        localStorage.setItem("access_token", action.payload.access_token);
        localStorage.setItem("refresh_token", action.payload.refresh_token);
      })
      .addCase(getRefreshToken.rejected, (state, action) => {
        state.tokenMsg = action.payload.msg;
      });
  },
});

// export const { loginSuccess, logout, clearIsRegisterPassState,updateToken } =
//   authSlice.actions;
export default authSlice.reducer;
