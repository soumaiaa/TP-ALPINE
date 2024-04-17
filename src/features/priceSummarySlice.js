import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0, // Le prix total initial est de 0
};

const priceSummarySlice = createSlice({
  name: 'priceSummary',
  initialState,
  reducers: {
    calculateTotalPrice(state, action) {
      // Logique de calcul du prix total en fonction des options sélectionnées
      // Pour cet exemple, supposons que nous recevons les options sélectionnées comme payload
      const selectedOptions = action.payload;
      // Code pour calculer le prix total en fonction des options sélectionnées...
      // state.totalPrice = /* Calcul du prix total */
    },
    updateTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
  },
});

export const { calculateTotalPrice, updateTotalPrice } = priceSummarySlice.actions;
export default priceSummarySlice.reducer;
