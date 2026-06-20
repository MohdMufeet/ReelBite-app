import { createSlice } from "@reduxjs/toolkit";
import type { orderState } from "./orderTypes";
import { getAllOrders, order } from "./orderThunk";

const initialState: orderState = {
  reel: null,
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(order.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(order.fulfilled, (state, action) => {
        state.loading = false;
        state.reel = action.payload.data;
      })
      .addCase(order.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // get all orders
      .addCase(getAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.reel = action.payload.data;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;
