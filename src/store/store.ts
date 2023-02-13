import { configureStore } from "@reduxjs/toolkit";

interface IReducer {
  [key: string]: any;
}

export const store = configureStore<IReducer>({
  reducer: {},
});
