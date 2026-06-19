import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPartnerServices,
  loginPartnerServices,
  logoutPartnerServices,
  registerPartnerServices,
} from "./partnerAuthServices";
import type { partnerFormData } from "./partnerAuthTypes";

// login partner asyncthunk
export const loginPartner = createAsyncThunk(
  "partnerAuth/loginPartner",
  async (data: partnerFormData, thunkAPI) => {
    try {
      const partnerData = await loginPartnerServices(data);
      return partnerData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Failed to login user");
    }
  },
);

// get user asyncthunk
export const getPartner = createAsyncThunk(
  "partnerAuth/getPartner",
  async (_, thunkAPI) => {
    try {
      const partnerData = await getPartnerServices();
      return partnerData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Please login or signup first");
    }
  },
);

// logout partner asyncthunk
export const logoutPartner = createAsyncThunk(
  "partnerAuth/logoutPartner",
  async (_, thunkAPI) => {
    try {
      const partnerData = await logoutPartnerServices();
      return partnerData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Failed to logout user");
    }
  },
);

// register user asyncthunk
export const registerPartner = createAsyncThunk(
  "partnerAuth/registerPartner",
  async (data: partnerFormData, thunkAPI) => {
    try {
      const partnerData = await registerPartnerServices(data);
      return partnerData;
    } catch (error: any) {
      return thunkAPI.rejectWithValue("Failed to signup user");
    }
  },
);
