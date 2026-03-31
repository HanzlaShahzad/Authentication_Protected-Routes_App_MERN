import { createSlice } from "@reduxjs/toolkit";
import { postUser } from "../Thunks/signupThunk";

const postUserSlice = createSlice({
  name: "post",
  initialState: {
    data: [],
    pending: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.pending = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(postUser.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
  },
});
export default postUserSlice.reducer;
