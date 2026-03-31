import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = axios.create({
  baseURL: "http://localhost:2000",
});

export const itemsPost = createAsyncThunk(
  "itemsPost",
  async ({ name, email }, { rejectWithValue }) => {
    try {
      const res = await URL.post("/items", { name, email });
      console.log("items======>:", res.data);
      return res.data.items;
    } catch (error) {
      console.log("itemsPost====>error", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);
