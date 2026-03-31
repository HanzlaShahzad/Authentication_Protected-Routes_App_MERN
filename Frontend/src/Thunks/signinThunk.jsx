import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = axios.create({
  baseURL: "http://localhost:2000",
});

export const postProducts = createAsyncThunk(
  "postProducts",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await URL.post("/signin", { email, password });
      return res.data;
    } catch (error) {
      console.log("postProducts====>error", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);
