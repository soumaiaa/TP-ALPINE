
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOptions: {}, // ou tout autre valeur initiale appropriée
};

const vehicleConfigSlice = createSlice({
  name: 'vehicleConfig',
  initialState,
  reducers: {
    updateOption(state, action) {
      // Logique de mise à jour de l'option
    },
  },
});

export const { updateOption } = vehicleConfigSlice.actions;
export default vehicleConfigSlice.reducer;