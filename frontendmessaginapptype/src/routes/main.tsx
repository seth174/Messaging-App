import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from "@mui/material";
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

  const calculateConversationName = (users: IUserPerConversations[] | undefined, length: number): string => {
    let name: string = "";
    const userId: string | null = window.sessionStorage.getItem("user_id");
    let userNumber: number = parseInt(userId ? userId : '-1');
    let count = 0;
    users?.forEach((user: IUserPerConversations) => {
      if (user.user?.id != userNumber) {
        count += user.user?.name ? user.user?.name.length : 0;
        name += user.user?.name + ', '
        count += 2;
      }
    });
    if (count > length) {
      return name.substring(0, length) + '...'
    }
    name = name.substring(0, name.length - 2)
    return name;
  }

  return (
    <div>

      <Box sx={{ display: 'flex' }}>
        <MainPageNavBar />
        <CssBaseline />

        <SideMenu userPerConversations={usersPerConversation} setConversation={setConversation} calculateConversationName={calculateConversationName} />
        <Conversation conversation={conversation} calculateConversationName={calculateConversationName} />
      </Box>
    </div>

  );
}

export default Main;