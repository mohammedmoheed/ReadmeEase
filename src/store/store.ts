import { configureStore } from "@reduxjs/toolkit";
import { fileReducer } from "./slices";

interface IReducer {
  [key: string]: any;
}

export const store = configureStore<IReducer>({
  reducer: {
    userFiles: fileReducer,
  },
});
