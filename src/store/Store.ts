import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/user/userAuthSlice";
import partnerAuthReducer from "../features/auth/partner/partnerAuthSlice";
import orderReducer from "../features/order/orderSlice";
import reelReducer from "../features/reels/reelSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    partner: partnerAuthReducer,
    reel: reelReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
