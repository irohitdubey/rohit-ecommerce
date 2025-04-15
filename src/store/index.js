// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import savedReducer from "./savedSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    saved: savedReducer,
  },
});

export default store;
