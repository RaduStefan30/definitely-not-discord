import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import alertReducer from "./alertSlice";
import friendsReducer from "./friendsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    friends: friendsReducer,
  },
});

export default store;
