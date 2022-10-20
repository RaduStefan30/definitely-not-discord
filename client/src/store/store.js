import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import alertReducer from "./alertSlice";
import friendsReducer from "./friendsSlice";
import chatReducer from "./chatSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    chat: chatReducer,
    friends: friendsReducer,
  },
});

export default store;
