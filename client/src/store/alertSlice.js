import { createSlice } from "@reduxjs/toolkit";

let timeout;

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    showAlert: false,
    alertText: "",
    alertType: "",
  },
  reducers: {
    show(state, action) {
      return { ...state, ...action.payload };
    },
    clear(state) {
      return { ...state, showAlert: false, alertType: "", alertText: "" };
    },
  },
});

export const showAlert = (alert) => {
  return async (dispatch) => {
    clearTimeout(timeout);
    dispatch(alertSlice.actions.show(alert));
    dispatch(clearAlert());
  };
};

export const clearAlert = () => {
  return async (dispatch) => {
    timeout = setTimeout(() => {
      dispatch(alertSlice.actions.clear());
    }, 3000);
  };
};

export const alertActions = alertSlice.actions;

export default alertSlice.reducer;
