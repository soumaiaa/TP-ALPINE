
import { createSlice } from '@reduxjs/toolkit';

const wheelsSlice = createSlice({
  name: 'wheels',
  initialState: [],
  reducers: {
    setWheels(state, action) {
      return action.payload;
    },
  },
});

export const { setWheels } = wheelsSlice.actions;
export default wheelsSlice.reducer;
