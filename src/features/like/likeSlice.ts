import { createSlice } from "@reduxjs/toolkit";
import type { likeState } from "./likeTypes";
import { like } from "./likeThunk";

const initialState: likeState = {
  reel: null,
  loading: false,
  error: null,
};
const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(like.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(like.fulfilled, (state, action) => {
        state.loading = false;
        state.reel = action.payload.data;
      })
      .addCase(like.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default likeSlice.reducer;
