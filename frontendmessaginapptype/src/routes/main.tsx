import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import Conversation from "../components/conversation";
import MainPageNavBar from "../components/main-page-nav-bar";
import NavBar from "../components/nav-bar";
import SideMenu from "../components/side-menu";
import { IUser } from "../models/IUser";
import { getUser } from "../services/UsersApi";

const Main: FC = () => {

  const [user, setUser] = useState<IUser | undefined>(undefined);



  useEffect(() => {
    async function getLoggedInUser() {
      const id: number = parseInt(window.sessionStorage.getItem("user_id") || "-100");
      const user: IUser = await getUser(id);
      setUser(user);
      return user;


    }
    getLoggedInUser();
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <MainPageNavBar />
        <CssBaseline />

        <SideMenu />
        <Conversation />
      </Box>
      <h1>Main Page</h1>
    </div>

  );
}

export default Main;