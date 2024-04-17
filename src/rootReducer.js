import { combineReducers } from 'redux';
import cartReducer from './features/cartSlice';
import userReducer from './features/userSlice';
import vehicleConfigReducer from './features/vehicleConfigSlice';
import priceSummaryReducer from './features/priceSummarySlice'; // Importez le reducer de la tranche

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  vehicleConfig: vehicleConfigReducer,
  priceSummary: priceSummaryReducer, // Utilisez le reducer de la tranche
});

export default rootReducer;
