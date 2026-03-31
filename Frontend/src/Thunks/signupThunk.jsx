import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = axios.create({
  baseURL: "http://localhost:2000",
});

export const postUser = createAsyncThunk(
  "postUser",
  async ({ fullName, email, password }, { rejectWithValue }) => {
    try {
      const res = await url.post("/login", { fullName, email, password });
      console.log("postData====>", res.data);
      return res.data;
    } catch (error) {
      console.log("postUser=======>error", error);
      return rejectWithValue(error.response.data);
    }
  },
);
