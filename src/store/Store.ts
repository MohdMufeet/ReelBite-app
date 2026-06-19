import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/user/userAuthSlice';
import partnerAuthReducer from '../features/auth/partner/partnerAuthSlice';

export const store = configureStore({
  reducer: {
     auth:authReducer,
    partner:partnerAuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
