import { createSlice } from "@reduxjs/toolkit";
import { postProducts } from "../Thunks/signinThunk";

const postProductSlice = createSlice({
  name: "postProduct",
  initialState: {
    data: null,
    token: null,
    pending: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(postProducts.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(postProducts.fulfilled, (state, action) => {
      state.pending = false;
      state.error = false;
      state.data = action.payload;
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
    });
    builder.addCase(postProducts.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
  },
});
export default postProductSlice.reducer;
