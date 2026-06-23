import { createSlice } from "@reduxjs/toolkit";
import {visitPartner }from "./partnerThunk"


const initialState = {
    partnerProfile: null,
    loading:false,
    error:""
}
const partnerSlice = createSlice({
    name:"partnerProfile",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(visitPartner.pending, (state) => {
                state.loading = true;
                state.error = "";
              })
              .addCase(visitPartner.fulfilled, (state, action) => {
                state.loading = false;
                state.partnerProfile = action.payload.data;
              })
              .addCase(visitPartner.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
              });
    }
});

const partnerReducer = partnerSlice.reducer;

export default partnerReducer