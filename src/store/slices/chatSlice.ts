import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { chats as chatsData } from "../../Components/data";
import type { Chat, Message } from "../../Components/types";

type ChatState = {
  chats: Chat[];
  currentChat: Chat | null;
};

const initialState: ChatState = {
  chats: chatsData,
  currentChat: chatsData[0] ?? null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    loadChat: (state, action: PayloadAction<number>) => {
      const chat = state.chats.find((chat) => chat.id === action.payload);
      if (chat) {
        state.currentChat = chat;
      }
    },

    addMessage: (state, action: PayloadAction<Message>) => {
      if (!state.currentChat) return;

      // Add message to currentChat
      state.currentChat.messages.push(action.payload);

      // Also update the same chat inside chats array
      const chatIndex = state.chats.findIndex(
        (chat) => chat.id === state.currentChat!.id
      );

      if (chatIndex !== -1) {
        state.chats[chatIndex].messages.push(action.payload);
      }
    },

    addChat: (state, action: PayloadAction<Chat>) => {
      const existingChat = state.chats.find(
        (chat) => chat.id === action.payload.id
      );

      if (existingChat) {
        state.currentChat = existingChat;
        return;
      }

      state.chats.push(action.payload);
      state.currentChat = action.payload;
    },
  },
});

export const { loadChat, addMessage, addChat } = chatSlice.actions;
export default chatSlice.reducer;
