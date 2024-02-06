// store.js
import { configureStore } from "@reduxjs/toolkit";
import depositReducer from "./depositReducer";
import modalReducer from "./modalReducer";

const store = configureStore({
  reducer: {
    deposits: depositReducer,
    modal: modalReducer,
  },
});

export default store;
