
import { createSlice } from '@reduxjs/toolkit';

const colorsSlice = createSlice({
  name: 'colors',
  initialState: [],
  reducers: {
    setColors(state, action) {
      return action.payload;
    },
  },
});

export const { setColors } = colorsSlice.actions;
export default colorsSlice.reducer;
