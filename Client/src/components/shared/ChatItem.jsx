import React, { memo } from "react";
import { Link } from "../Ui/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";

function ChatItem({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) {
  return (
    <Link
      style={{ padding: 0 }}
      to={`/chats/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          gap: "7rem",
          position: "relative",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          // borderBottom: "1px solid #f0f0f0",
        }}
      >
        <AvatarCard avatar={avatar} />
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          ></Box>
        )}
      </div>
    </Link>
  );
}

export default memo(ChatItem);
