// src/store/savedSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadSavedFromStorage = () => {
  try {
    const serializedSaved = localStorage.getItem("saved");
    if (serializedSaved === null) return { items: [] };
    return JSON.parse(serializedSaved);
  } catch (e) {
    console.error("Error loading saved items from storage:", e);
    return { items: [] };
  }
};

const initialState = loadSavedFromStorage();

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    saveForLater(state, action) {
      const item = action.payload;
      state.items.push({ ...item, quantity: 1 });
      localStorage.setItem("saved", JSON.stringify(state));
    },
    removeFromSaved(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      localStorage.setItem("saved", JSON.stringify(state));
    },
  },
});

export const { saveForLater, removeFromSaved } = savedSlice.actions;
export default savedSlice.reducer;
