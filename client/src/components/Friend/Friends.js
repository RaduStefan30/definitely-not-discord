import { useDispatch, useSelector } from "react-redux";

import { changeChat } from "../../store/chatSlice";
import Friend from "./Friend";
import "./Friends.css";

const Friends = () => {
  const dispatch = useDispatch();

  const { friends, onlineUsers } = useSelector((state) => state.friends);

  const handleChat = (id, username) => {
    dispatch(
      changeChat({
        chatDetails: { id, username },
        chatType: "direct",
        chatMessages: [],
      })
    );
  };

  const getUsers = (friends = [], onlineUsers = []) => {
    const allFriends = friends.map((friend) => {
      const isUserOnline = onlineUsers.find(
        (user) => user.userId === friend.id
      );
      const isOnline = isUserOnline ? true : false;
      return { ...friend, isOnline };
    });
    return allFriends;
  };

  const users = getUsers(friends, onlineUsers).map((friend) => {
    return <Friend key={friend.id} handleChat={handleChat} friend={friend} />;
  });

  if (users.length > 0) return users;
  return <div className="no-friends">You have no friends... </div>;
};

export default Friends;
