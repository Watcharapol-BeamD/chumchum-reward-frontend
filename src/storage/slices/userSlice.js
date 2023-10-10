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
  user:[]
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: { setUser: (state, action) => {
    state.userId= action.payload
  } },
  extraReducers: (builder) => {},
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
