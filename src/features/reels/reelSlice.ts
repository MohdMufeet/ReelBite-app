import { createSlice } from "@reduxjs/toolkit";
import type { ReelState } from "./reelTypes";
import { getReelById, getReelByPartner, getReels, postReel } from "./reelThunk";

const initialState: ReelState = {
  reel: null,
  reels:null,
  loading: false,
  error: null,
};

const reelSlice = createSlice(
  {
    name: "reel",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getReels.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getReels.fulfilled, (state, action) => {
          state.loading = false;
          state.reels = action.payload.data;
        })
        .addCase(getReels.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })

        //post reel
        .addCase(postReel.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(postReel.fulfilled, (state, action) => {
          state.loading = false;
          state.reels = action.payload.data;
        })
        .addCase(postReel.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })

        //Get reel By Id
        .addCase(getReelById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getReelById.fulfilled, (state, action) => {
          state.loading = false;
          state.reel = action.payload.data;
        })
        .addCase(getReelById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })

        //Get reels By Partner
        .addCase(getReelByPartner.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getReelByPartner.fulfilled, (state, action) => {
          state.loading = false;
          state.reel = action.payload.data;
        })
        .addCase(getReelByPartner.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })
    },
  },
);

export default reelSlice.reducer;
