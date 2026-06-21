import { createSlice } from "@reduxjs/toolkit";
import { getSavedReels, postSavedReels } from "./saveThunk";
import type { save } from "./saveTypes";

const initialState: save = {
  saveReels: null,
  loading: false,
  error: null,
};

const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getSavedReels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSavedReels.fulfilled, (state, action) => {
        state.loading = false;
        state.saveReels = action.payload.data;
      })
      .addCase(getSavedReels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // toggle save reels

      .addCase(postSavedReels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postSavedReels.fulfilled, (state, action) => {
        state.loading = false;
        state.saveReels = action.payload.data;
      })
      .addCase(postSavedReels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default saveSlice.reducer;
