import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import Conversation from "../components/conversation";
import MainPageNavBar from "../components/main-page-nav-bar";
import NavBar from "../components/nav-bar";
import SideMenu from "../components/side-menu";
import { IConversation } from "../models/IConversation";
import { IUser } from "../models/IUser";
import { IUserPerConversations } from "../models/IUserPerConversations";
import { getUser } from "../services/UsersApi";

const Main: FC = () => {

  const [user, setUser] = useState<IUser>();

  const [conversation, setConversation] = useState<IConversation | undefined>({} as IConversation);

  const [usersPerConversation, setUsersPerConversation] = useState<IUserPerConversations[] | undefined>(undefined);

  useEffect(() => {
    const id: number = parseInt(window.sessionStorage.getItem("user_id") || "-100");
    async function getLoggedInUser() {


      const user: IUser = await getUser(id);
      setUser(user);
      setUsersPerConversation(user.userPerConversations);

    };
    getLoggedInUser();
  }, []);

  return (
    <div>

      <Box sx={{ display: 'flex' }}>
        <MainPageNavBar />
        <CssBaseline />

        <SideMenu userPerConversations={usersPerConversation} setConversation={setConversation} />
        <Conversation conversation={conversation} />
      </Box>
    </div>

  );
}

export default Main;