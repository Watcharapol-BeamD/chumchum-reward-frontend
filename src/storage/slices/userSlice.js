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
  user: localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null
};

 

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log(action);
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
 
   
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
