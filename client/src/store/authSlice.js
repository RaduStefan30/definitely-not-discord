import { createSlice } from "@reduxjs/toolkit";

import * as api from "../api";

export const authSlice = createSlice({
  name: "auth",
  initialState: { userData: JSON.parse(localStorage.getItem("userData")) },
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

//maybe refactor into 1
export const login = (data, onSuccess, onFail) => {
  return async (dispatch) => {
    const response = await api.login(data);

    if (response.error) {
      return onFail(response.message);
    }
    const userData = response.data;
    localStorage.setItem("userData", JSON.stringify(userData));

    dispatch(authSlice.actions.setUser(userData));

    return onSuccess();
  };
};

export const register = (data, onSuccess, onFail) => {
  return async (dispatch) => {
    const response = await api.register(data);

    if (response.error) {
      return onFail(response.message);
    }
    const userData = response.data;
    localStorage.setItem("userData", JSON.stringify(userData));

    dispatch(authSlice.actions.setUser(userData));

    return onSuccess();
  };
};

export const authActions = authSlice.actions;

export default authSlice.reducer;
