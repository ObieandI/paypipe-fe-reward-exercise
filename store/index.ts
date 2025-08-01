import { configureStore } from '@reduxjs/toolkit';
import rewardReducer from './rewardSlice';

export const store = configureStore({
  reducer: {
    reward: rewardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
