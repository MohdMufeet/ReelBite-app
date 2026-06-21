import { createAsyncThunk } from "@reduxjs/toolkit";
import { likeServices } from "./likeServices";

export const like = createAsyncThunk("like/like", async (data: any, thunkAPI) => {
    try {
        const reels = await likeServices(data);
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
});