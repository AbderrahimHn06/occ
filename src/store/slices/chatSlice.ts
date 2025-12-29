import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { chats } from "../../Components/data";

/* ================= TYPES ================= */

import type { Chat, Message } from "../../Components/types";

/* ================= Consts ================= */
const initialState: Chat = chats[0];

/* ================= SLICE ================= */

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    loadChat: (_, action: PayloadAction<number>) => {
      return chats.find((chat) => chat.id === action.payload);
    },
  },
});

export const { addMessage, loadChat } = chatSlice.actions;
export default chatSlice.reducer;
