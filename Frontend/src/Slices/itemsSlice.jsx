import { createSlice } from "@reduxjs/toolkit";
import { itemsPost } from "../Thunks/itemsThunk";
const itemsSlice = createSlice({
  name: "items",
  initialState: {
    data: [],
    pending: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(itemsPost.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(itemsPost.fulfilled, (state, action) => {
      state.pending = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(itemsPost.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
  },
});
export default itemsSlice.reducer;
