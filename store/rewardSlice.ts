import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RewardState {
  points: number;
}

const initialState: RewardState = {
  points: 0,
};

export const rewardSlice = createSlice({
  name: 'reward',
  initialState,
  reducers: {
    incrementBy: (state, action: PayloadAction<number>) => {
      state.points += action.payload;
    },
  },
});

export const { incrementBy } = rewardSlice.actions;
export default rewardSlice.reducer;
