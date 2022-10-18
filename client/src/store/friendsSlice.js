import { createSlice } from "@reduxjs/toolkit";

import * as api from "../api";

export const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    pendingInvitations: [],
    onlineUsers: [],
  },
  reducers: {
    setFriends(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const sendFriendInvitation = (email, closeDialog) => {
  return async (dispatch) => {
    const response = api.sendFriendInvitation(email);

    if (response.error) {
      //to return onFail
      console.log(response.error);
      return;
    }
    //to return onSuccess
    console.log("merge uai");

    //should also close the dialog
    return;
  };
};

export const updatePendingInvitation = (pendingInvitations) => {
  return async (dispatch) => {
    console.log(pendingInvitations);
    dispatch(friendsSlice.actions.setFriends({ pendingInvitations }));
  };
};

export const friendActions = friendsSlice.actions;

export default friendsSlice.reducer;
