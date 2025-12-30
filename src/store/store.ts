import { configureStore } from "@reduxjs/toolkit";

// Slices imports
import page from "./slices/pageSlice";
import chat from "./slices/chatSlice";
import inboxs from "./slices/inboxSlice";
import contacts from "./slices/contactsSlice";
import inboxStatusReducer from "./slices/inboxStatusSlice";

export const store = configureStore({
  reducer: {
    page,
    chat,
    inboxs,
    contacts,
    inboxStatus: inboxStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
