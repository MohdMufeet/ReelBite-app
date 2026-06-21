import { createAsyncThunk } from "@reduxjs/toolkit";
import services from "./reelServices";

export const getReels = createAsyncThunk("reels/getReels", async (_, thunkAPI) => {
    try {
        const reels = await services.getReelsServices();
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
});

export const getReelById = createAsyncThunk("reels/getReelById", async (id:string, thunkAPI) => {
    try {
        const reels = await services.getReelByIdServices(id);
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
});
export const getReelByPartner = createAsyncThunk("reels/getReelByPartner", async (_, thunkAPI) => {
    try {
        const reels = await services.getReelByPartnerServices();
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
});

export const postReel = createAsyncThunk("reels/postReel", async (data: any, thunkAPI) => {
    try {
        const reels = await services.postReelsServices(data);
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
});

export const deleteReelByPartner = createAsyncThunk("reels/deleteReelByPartner", async (id: string, thunkAPI) => {
    try {
        const reels = await services.deleteReelByPartnerServices(id);
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to delete reels");
    }
});
