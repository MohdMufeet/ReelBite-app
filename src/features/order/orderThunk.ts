import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrdersServices, orderServices } from "./orderServices";

export const order = createAsyncThunk("order/order", async (data: any, thunkAPI) => {
    try {
        const reels = await orderServices(data);
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to create order");
    }
});

export const getAllOrders = createAsyncThunk("order/getAllOrders", async (_, thunkAPI) => {
    try {
        const reels = await getAllOrdersServices();
        return reels;
    } catch (error: any) {
        return thunkAPI.rejectWithValue("Failed to get reels");
    }
});