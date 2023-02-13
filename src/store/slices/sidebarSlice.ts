import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
        state.isOpen = !state.isOpen;
    }
  },
});
// get sidebar info
export const getSidebarInfo = (state: any) => state.sidebar.isOpen;

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
