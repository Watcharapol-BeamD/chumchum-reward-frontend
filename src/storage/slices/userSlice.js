import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { liffApiInstance } from "../../services/liffApi";

const initialState = {
  isLoading: false,
  retailer_name: "",
  bplus_code: "",
  phone_number: "",
  displayName: "",
  pictureUrl: "",
  userId: "",
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (userData, { rejectWithValue }) => {
 
    try {
      const res = await liffApiInstance.post(
        `user/get_customer_by_id`,
        userData
      );
      // console.log(res)
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getEditCustomerInfo = createAsyncThunk(
  "user/getEditCustomerInfo",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await liffApiInstance.post("user/edit_customer_info", userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.isLoading = true;
        state.msg = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.msg = action.payload.msg;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.msg = action.payload.msg;
      })
      .addCase(getEditCustomerInfo.pending, (state) => {
        state.isLoading = true;
        state.msg = null;
      })
      .addCase(getEditCustomerInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.msg = action.payload.msg;
      })
      .addCase(getEditCustomerInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.msg = action.payload.msg;
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
