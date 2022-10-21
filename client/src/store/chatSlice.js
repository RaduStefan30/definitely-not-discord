import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatDetails: null,
    chatType: null,
    chatMessages: [
      {
        id: null,
        content: "",
        sameSender: "",
        username: "",
        date: "",
        type: "",
        sameDate: "",
        isCurrentUser: "",
      },
    ],
  },
  reducers: {
    setChat(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const changeChat = (data) => {
  return async (dispatch) => {
    dispatch(
      chatSlice.actions.setChat({
        ...data,
      })
    );
  };
};

export const chatActions = chatSlice.actions;

export default chatSlice.reducer;
