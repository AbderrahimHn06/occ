import { configureStore } from "@reduxjs/toolkit";

// Slices imports
import page from "./slices/pageSlice";

export const store = configureStore({
  reducer: {
    page,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
