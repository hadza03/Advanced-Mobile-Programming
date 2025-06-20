import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {
        username: action.payload.username || '',
        email: action.payload.email || '',
        firstName: action.payload.firstName || '',
        lastName: action.payload.lastName || '',
      };
    },
    logout: (state) => {
      state.user = {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
