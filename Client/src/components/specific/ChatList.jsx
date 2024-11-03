import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

function ChatList({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, idx) => {
        const { _id, name, groupChat, avatar, members } = data;
        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );
        const isOnline = members?.some((member) => onlineUsers.includes(_id));

        return (
          <ChatItem
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId == _id}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            handleDeleteChat={handleDeleteChat}
            index={idx}
          />
        );
      })}
    </Stack>
  );
}

export default ChatList;
