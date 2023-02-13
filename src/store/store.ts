import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./slices/fileSlice";
import sidebarReducer from "./slices/sidebarSlice";

interface IReducer {
  [key: string]: any;
}

export const store = configureStore<IReducer>({
  reducer: {
    userFiles: fileReducer,
    sidebar: sidebarReducer,
  },
});
