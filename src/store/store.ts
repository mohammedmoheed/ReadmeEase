import { configureStore } from "@reduxjs/toolkit";
import { fileReducer, sectionReducer, sidebarReducer } from "./slices";

interface IReducer {
  [key: string]: any;
}

export const store = configureStore<IReducer>({
  reducer: {
    userFiles: fileReducer,
    sidebar: sidebarReducer,
    sections: sectionReducer,
  },
});
