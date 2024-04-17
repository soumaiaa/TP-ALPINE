import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialisez le panier avec un tableau vide
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload); // Ajoutez un article au panier
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id); // Supprimez un article du panier
    },
    clearCart(state) {
      state.items = []; // Videz le panier
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
