// store.js
import { configureStore } from '@reduxjs/toolkit';
import colorsReducer from '../features/colorsSlice';
import wheelsReducer from '../features/wheelsSlice';
import selleriesReducer from '../features/selleriesSlice';
import equipementsReducer from '../features/equipementsSlice';

const store = configureStore({
  reducer: {
    colors: colorsReducer,
    wheels: wheelsReducer,
    selleries: selleriesReducer,
    equipements: equipementsReducer
  },
});

export default store;


