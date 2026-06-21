import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSavedReelsServices, postSavedReelsServices } from "./saveServices";

export const getSavedReels = createAsyncThunk("save/getSavedReels", async (_, thunkAPI) => {
    try {
        const reels = await getSavedReelsServices();
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
});

export const postSavedReels = createAsyncThunk("save/postSavedReels", async (data: any, thunkAPI) => {
    try {
        const reels = await postSavedReelsServices(data);
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to toggle reels");
    }
});