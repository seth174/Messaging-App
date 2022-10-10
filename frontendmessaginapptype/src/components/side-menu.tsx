import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { IConversation } from "../models/IConversation";
import { IUserPerConversations } from "../models/IUserPerConversations";
import CreateIcon from '@mui/icons-material/Create';
import { IUser } from "../models/IUser";

const drawerWidth = 250;

interface ISideMenuProps {
  userPerConversations: IUserPerConversations[] | undefined
  setConversation: React.Dispatch<React.SetStateAction<IConversation | undefined>>
}

const SideMenu: FC<ISideMenuProps> = (props: ISideMenuProps) => {


  const conversationName = (userPerConversation: IUserPerConversations): string => {
    if (userPerConversation.conversation?.title != null) {
      return userPerConversation.conversation.title;
    }
    let name: string = "";
    const userId: string | null = window.sessionStorage.getItem("user_id");
    let userNumber: number = parseInt(userId ? userId : '-1');
    let count = 0;
    userPerConversation.conversation?.userPerConversations?.forEach((user: IUserPerConversations) => {
      if (user.user?.id != userNumber) {
        count += user.user?.name ? user.user?.name.length : 0;
        if (count > 20) {
          name += '...do'
          return name;
        }
        name += user.user?.name + ', '
        count += 2;
      }
    });
    name = name.substring(0, name.length - 2)
    return name;
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar sx={{ height: 100 }} />
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CreateIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="New Conversation" />
            </ListItemButton>
          </ListItem >
          {props.userPerConversations?.map((userPerConversation, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => props.setConversation(userPerConversation.conversation)} >
                <ListItemIcon>
                  {userPerConversation?.conversation?.userPerConversations?.length == 2 ?
                    <div>
                      <PersonIcon color="primary" />
                    </div>
                    :
                    userPerConversation?.conversation?.userPerConversations?.length == 3 ?
                      <div>
                        <PersonIcon color="primary" />
                        <PersonIcon color="primary" />
                      </div>
                      :
                      <div>
                        <PersonIcon color="primary" />
                        <PersonIcon color="primary" />
                        <AddIcon color="primary" />
                      </div>
                  }
                </ListItemIcon>
                <ListItemText primary={conversationName(userPerConversation)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer >
  );
}


export default SideMenu;