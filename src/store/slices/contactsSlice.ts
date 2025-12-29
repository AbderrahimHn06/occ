import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Types

import type { User } from "../../Components/types";

// Consts
import { contacts } from "../../Components/data";

const initialState: User[] = contacts;

// Slice

const inboxSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    addInbox: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

// Exports

export const { addInbox } = inboxSlice.actions;

export default inboxSlice.reducer;
