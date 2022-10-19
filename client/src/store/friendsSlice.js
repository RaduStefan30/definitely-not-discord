import { createSlice } from "@reduxjs/toolkit";

import * as api from "../api";

export const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    invitations: [],
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
    const response = api.sendInvitation(email);

    if (response.error) {
      //to return onFail
      console.log(response.err);
      return;
    }
    //to return onSuccess
    console.log("merge uai");

    //should also close the dialog
    return;
  };
};

export const acceptInvitation = (id) => {
  return async (dispatch) => {
    const response = await api.acceptInvitation(id);

    if (response.error) {
      //to return onFail
      return;
    }
    //to return onSuccess
    console.log("invitation accepted");

    return;
  };
};

export const declineInvitation = (id) => {
  return async (dispatch) => {
    const response = await api.rejectInvitation(id);

    if (response.error) {
      //to return onFail
      return;
    }
    //to return onSuccess
    console.log("invitation declined");

    return;
  };
};

export const updatePendingInvitation = (invitations) => {
  return async (dispatch) => {
    dispatch(friendsSlice.actions.setFriends({ invitations }));
  };
};

export const updateFriends = (friends) => {
  return async (dispatch) => {
    dispatch(friendsSlice.actions.setFriends({ friends }));
  };
};

export const updateOnlineUsers = (onlineUsers) => {
  return async (dispatch) => {
    dispatch(friendsSlice.actions.setFriends({ onlineUsers }));
  };
};

export const friendActions = friendsSlice.actions;

export default friendsSlice.reducer;
