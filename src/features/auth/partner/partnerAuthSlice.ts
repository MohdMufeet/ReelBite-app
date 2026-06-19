import { createSlice } from "@reduxjs/toolkit";
import type { partnerAuthState } from "./partnerAuthTypes";
import {
  getPartner,
  loginPartner,
  logoutPartner,
  registerPartner,
} from "./partnerAuthThunk";

// initial state

const initialState: partnerAuthState = {
  partner: null,
  isPartnerAuthenticated: false,
  loading: false,
  error: null,
};

// auth slice

const partnerAuthSlice = createSlice({
  name: "partnerAuth",
  initialState,
  reducers: {
    logout: (state) => {
      ((state.partner = null), (state.isPartnerAuthenticated = false));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPartner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginPartner.fulfilled, (state, action) => {
        state.loading = false;
        state.partner = {
          _id: action.payload.data._id,
          name: action.payload.data.name,
          role: action.payload.data.role,
          email: action.payload.data.email,
          contactName: action.payload.data.contactName,
          phone: action.payload.data.phone,
          address: action.payload.data.address,
        };
        state.isPartnerAuthenticated = true;
      })
      .addCase(loginPartner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerPartner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerPartner.fulfilled, (state, action) => {
        state.loading = false;
        state.partner = {
          _id: action.payload.data._id,
          name: action.payload.data.name,
          role: action.payload.data.role,
          email: action.payload.data.email,
          contactName: action.payload.data.contactName,
          phone: action.payload.data.phone,
          address: action.payload.data.address,
        };
        state.isPartnerAuthenticated = true;
      })
      .addCase(registerPartner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logoutPartner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutPartner.fulfilled, (state, _) => {
        state.loading = false;
        state.partner = null;
        state.isPartnerAuthenticated = false;
      })
      .addCase(logoutPartner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getPartner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPartner.fulfilled, (state, action) => {
        state.loading = false;
        state.partner = {
          _id: action.payload.data._id,
          name: action.payload.data.name,
          role: action.payload.data.role,
          email: action.payload.data.email,
          contactName: action.payload.data.contactName,
          phone: action.payload.data.phone,
          address: action.payload.data.address,
        };
        state.isPartnerAuthenticated = true;
      })
      .addCase(getPartner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = partnerAuthSlice.actions;
export default partnerAuthSlice.reducer;
