// store.js
import { configureStore } from "@reduxjs/toolkit";
import depositReducer from "./depositReducer";

const store = configureStore({
  reducer: {
    deposits: depositReducer,
  },
});

export default store;
