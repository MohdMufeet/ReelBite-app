import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserServices,
  loginUserServices,
  logoutUserServices,
  registerUserServices,
} from "./userAuthServices";
import type { formData } from "./userAuthTypes";

// login user asyncthunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: formData, thunkAPI) => {
    try {
      const userData = await loginUserServices(data);
      return userData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Failed to login user");
    }
  },
);

// get user asyncthunk
export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    const userData = await getUserServices();
    return userData;
  } catch (error: any) {
    return thunkAPI.rejectWithValue("Please login or signup first");
  }
});

// logout user asyncthunk
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const userData = await logoutUserServices();
      return userData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Failed to logout user");
    }
  },
);

// register user asyncthunk
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: formData, thunkAPI) => {
    try {
      const userData = await registerUserServices(data);
      return userData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Failed to signup user");
    }
  },
);
