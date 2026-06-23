import { createAsyncThunk } from "@reduxjs/toolkit";
import cartServices from "./cartServices";

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
    try {
        const reels = await cartServices.getCartServices();
        return reels; 
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
})
export const addCart = createAsyncThunk("cart/addCart", async (data, thunkAPI) => {
    try {
        const reels = await cartServices.addCartServices(data);
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
})
// export const getAllCart = createAsyncThunk("cart/getAllCart", async (_, thunkAPI) => {
//     try {
//         const reels = await cartServices.getAllCartServices();
//         return reels;
//     } catch (error: any) {
//         return thunkAPI.rejectWithValue("Failed to get reels");
//     }
// })
export const updateCart = createAsyncThunk("cart/updateCart", async (data, thunkAPI) => {
    try {
        const reels = await cartServices.updateCartServices(data);
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
})
export const deleteCart = createAsyncThunk("cart/deleteCart", async (data, thunkAPI) => {
    try {
        const reels = await cartServices.deleteCartServices(data);
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
})