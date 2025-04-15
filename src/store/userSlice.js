// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadUserFromStorage = () => {
  try {
    const serializedUser = localStorage.getItem("user");
    if (serializedUser === null || !serializedUser.startsWith("{")) {
      return { isLoggedIn: false, user: null };
    }
    return JSON.parse(serializedUser);
  } catch (e) {
    console.error("Error loading user from storage:", e);
    return { isLoggedIn: false, user: null };
  }
};

const initialState = loadUserFromStorage();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
