import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import rewardSlice from "./slices/rewardSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    reward: rewardSlice,
  },
});
