'use client'
import widgetSlice from "./widgetSlice";

const { configureStore } = require("@reduxjs/toolkit");
const loadState = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.warn("Could not load state", err);
      return undefined;
    }
  };
  
  // Save the state to localStorage
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch (err) {
      console.error("Could not save state", err);
    }
  };
export const store=configureStore({
    reducer:{
        widgets:widgetSlice,
    },
    preloadedState: loadState(),
})
store.subscribe(() => {
    saveState(store.getState());
  });