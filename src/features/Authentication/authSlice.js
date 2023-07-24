import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    loading: false,
    user: [],
  },
  reducers: {
    register: (state, action) => {
      state.user = action.palo;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
