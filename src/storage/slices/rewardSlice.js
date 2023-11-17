import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { liffApiInstance } from "../../services/liffApi";

const initialState = {
  rewardList: [],
  reward: [],
  msg: "",
};

export const getReward = createAsyncThunk(
  "reward/getReward",
  async (customerGroupId, { rejectWithValue }) => {
    const data = {
      customerGroupId: customerGroupId,
    };
    try {
      const res = await liffApiInstance.post(
        `reward/get_reward_by_time_and_group`,
        data
      );
      console.log(res.data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRewardById = createAsyncThunk(
  "reward/getRewardById",
  async (reward_id, { rejectWithValue }) => {
    try {
      const res = await liffApiInstance.get(
        `reward/get_reward_by_id/${reward_id}`
      );
      console.log(res.data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRedeem = createAsyncThunk(
  "reward/getRedeem",

  async (userData, { rejectWithValue }) => {
    console.log(userData);
    try {
      const res = await liffApiInstance.post(`reward/redeem_reward`, userData);
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
        state.msg = null;
      })
      .addCase(getReward.fulfilled, (state, action) => {
        state.rewardList = action.payload;
      })
      .addCase(getReward.rejected, (state, action) => {
        state.msg = action.payload;
      })
      .addCase(getRewardById.pending, (state, action) => {
        state.msg = null;
      })
      .addCase(getRewardById.fulfilled, (state, action) => {
        state.reward = action.payload;
      })
      .addCase(getRewardById.rejected, (state, action) => {
        state.msg = action.payload;
      })
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

export default rewardSlice.reducer;
