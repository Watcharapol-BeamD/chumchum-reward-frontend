import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { liffApiInstance } from "../../services/liffApi";

const initialState = {
  isLoading: false,
  retailer_name: "",
  bplus_code: "",
  mobile_number: "",
  displayName: "",
  pictureUrl: "",
  userId: "",
  user: localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null
};

export const getRedeem = createAsyncThunk(
  "user/getRedeem",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await liffApiInstance.post(`/redeem_reward`, userData);
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
      console.log(action);
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRedeem.pending, (state) => {
        state.isLoading = true;
        state.msg = null;
      })
      .addCase(getRedeem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.msg = action.payload.msg;
      })
      .addCase(getRedeem.rejected, (state, action) => {
        state.isLoading = false;
        state.msg = action.payload.msg;
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
