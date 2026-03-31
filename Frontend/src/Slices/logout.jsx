import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
  name: "logouts",
  initialState: {
    token: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
});
export const { logout } = logoutSlice.actions;
export default logoutSlice.reducer;
