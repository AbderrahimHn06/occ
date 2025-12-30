import { createSlice } from "@reduxjs/toolkit";

type InboxStatusState = {
  isChatOpen: boolean;
};

const initialState: InboxStatusState = {
  isChatOpen: false, // closed on first load
};

const inboxStatusSlice = createSlice({
  name: "inboxStatus",
  initialState,
  reducers: {
    openChat(state) {
      state.isChatOpen = true;
    },
    closeChat(state) {
      state.isChatOpen = false;
    },
    toggleChat(state) {
      state.isChatOpen = !state.isChatOpen;
    },
  },
});

export const { openChat, closeChat, toggleChat } = inboxStatusSlice.actions;

export default inboxStatusSlice.reducer;
