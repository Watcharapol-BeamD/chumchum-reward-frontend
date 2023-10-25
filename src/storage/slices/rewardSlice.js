import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { liffApiInstance } from "../../services/liffApi";
 
 
const initialState = {
  rewards: [],
  msg: "",
};

export const getReward = createAsyncThunk(
  "reward/getReward",
  async (args, { rejectWithValue }) => {
    try {
      const res = await liffApiInstance.get(`reward/get_reward`);
      console.log(res.data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const rewardSlice = createSlice({
  name: "reward",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReward.pending, (state, action) => {
        state.msg= action.payload
      })
      .addCase(getReward.fulfilled, (state, action) => {
        state.rewards = action.payload
      })
      .addCase(getReward.rejected, (state, action) => {
        state.msg= action.payload
      });
  },
});


export default rewardSlice.reducer