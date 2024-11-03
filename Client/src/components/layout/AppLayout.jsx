import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "../shared/Title";
import Grid from "@mui/material/Grid2";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";
const AppLayout = () => (WrappedComponent) => (props) => {
  const params = useParams();
  const chatId = params.chatId;

  const handleDeleteChat = (e, _id, groupChat) => {
    e.preventDault();
  };
  return (
    <>
      <Title />
      <Header />
      <Grid container height={"calc(100vh - 4rem)"}>
        <Grid
          sx={{
            xs: "none",
            sm: "block",
          }}
          size={{ md: 3, sm: 4, lg: 3 }}
          height="100%"
        >
          <ChatList
            chats={sampleChats}
            chatId={chatId}
            handleDeleteChat={handleDeleteChat}
          />
        </Grid>
        <Grid
          sx={{
            xs: "none",
            sm: "block",
          }}
          size={{ xs: 12, sm: 8, md: 5, lg: 6 }}
          height="100%"
          bgcolor="primary.main"
        >
          <WrappedComponent {...props} />
        </Grid>
        <Grid
          height={"100%"}
          bgcolor={"primary.main"}
          sx={{
            xs: "none",
            sm: "block",
            padding: "2rem",
            bgcolor: "rgba(0,0,0,0.85)",
          }}
          size={{ md: 4, lg: 3 }}
        >
          <Profile />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default AppLayout;
