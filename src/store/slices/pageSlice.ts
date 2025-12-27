import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type PageState = "inbox" | "contacts" | "profile";

export const pageSlice = createSlice({
  name: "page",
  initialState: "inbox",
  reducers: {
    setCurrentPage(_, action: PayloadAction<PageState>) {
      return action.payload;
    },
  },
});

export const { setCurrentPage } = pageSlice.actions;
export default pageSlice.reducer;
