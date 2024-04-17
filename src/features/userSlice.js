import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    userInfo: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload; // Stockez les informations de l'utilisateur après la connexion
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null; // Effacez les informations de l'utilisateur après la déconnexion
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
