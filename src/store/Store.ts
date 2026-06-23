import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/user/userAuthSlice";
import partnerAuthReducer from "../features/auth/partner/partnerAuthSlice";
import orderReducer from "../features/order/orderSlice";
import reelReducer from "../features/reels/reelSlice";
import saveReducer from "@/features/save/saveSlice";
import likeReducer from "../features/like/likeSlice";
import partnerReducer from "@/features/partnerProfile/partnerSlice";
import cartReducer from "@/features/cart/cartSlice";


export const store = configureStore({
  reducer: {
    auth:authReducer,
        partner:partnerAuthReducer,
        reel:reelReducer,
        like:likeReducer,
        save:saveReducer,
        partnerProfile:partnerReducer,
        cart:cartReducer,
        order:orderReducer
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
