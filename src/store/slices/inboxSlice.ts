import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Types

import type { inbox } from "../../Components/types";

// Consts
import { inboxs } from "../../Components/data";

const initialState: inbox[] = inboxs;

// Slice

const inboxSlice = createSlice({
  name: "inbox",
  initialState,
  reducers: {
    addInbox: (state, action: PayloadAction<inbox>) => {
      state.push(action.payload);
    },
  },
});

// Exports

export const { addInbox } = inboxSlice.actions;

export default inboxSlice.reducer;
