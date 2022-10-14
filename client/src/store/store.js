import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import alertReducer from "./alertSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
  },
});

export default store;
