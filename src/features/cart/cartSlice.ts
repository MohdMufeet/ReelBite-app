import { createSlice } from "@reduxjs/toolkit";
import { addCart,  getCart , updateCart, deleteCart} from "./cartThunk";
import type { initialState } from "./cartTypes";

const initialState:initialState = {
    cart:null,
    loading:false,
    error:""
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        // get cart
        .addCase(getCart.pending, (state) => {
            state.loading = true;
            state.error = "";
          })
          .addCase(getCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload.data;
          })
          .addCase(getCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          })

          // add to cart
          .addCase(addCart.pending, (state) => {
            state.loading = true;
            state.error = "";
          })
          .addCase(addCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload.data;
          })
          .addCase(addCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          })

          // get all cart
          // .addCase(getAllCart.pending, (state) => {
          //   state.loading = true;
          //   state.error = "";
          // })
          // .addCase(getAllCart.fulfilled, (state, action) => {
          //   state.loading = false;
          //   state.cart = action.payload.data;
          // })
          // .addCase(getAllCart.rejected, (state, action) => {
          //   state.loading = false;
          //   state.error = action.payload as string;
          // })

          // update cart
          .addCase(updateCart.pending, (state) => {
            state.loading = true;
            state.error = "";
          })
          .addCase(updateCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload.data;
          })
          .addCase(updateCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          })

          // delete cart
          .addCase(deleteCart.pending, (state) => {
            state.loading = true;
            state.error = "";
          })
          .addCase(deleteCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload.data;
          })
          .addCase(deleteCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
    }
});


export default cartSlice.reducer