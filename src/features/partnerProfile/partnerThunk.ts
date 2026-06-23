import { createAsyncThunk } from "@reduxjs/toolkit";
import { visitProfleServices } from "./partnerServices";
export const visitPartner = createAsyncThunk(
  "partnerProfile",
  async (id: string, thunkAPI) => {
    try {
      console.log("id");
      // const id = localStorage.getItem("id");
      const reels = await visitProfleServices(id);
      console.log("reels", reels);
      return reels;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Failed to get reels");
    }
  },
);
