// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { liffApiInstance } from "../../services/liffApi";

const initialState = {
  isRegisterPass: false,
  msg: "",
  isRegister: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      console.log(userData)
      const res = await liffApiInstance.post(`/register`, userData);
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
      const res = await liffApiInstance.post(`/is_register`, userData);
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
        state.isLoading = false;
        state.msg = action.payload.msg;
        state.isRegisterPass = action.payload.isRegisterPass;
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
      });
  },
});

// export const { loginSuccess, logout, clearIsRegisterPassState,updateToken } =
//   authSlice.actions;
export default authSlice.reducer;
