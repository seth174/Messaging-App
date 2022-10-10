import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { IConversation } from "../models/IConversation";
import { IUserPerConversations } from "../models/IUserPerConversations";
import CreateIcon from '@mui/icons-material/Create';

const drawerWidth = 250;

interface ISideMenuProps {
  userPerConversations: IUserPerConversations[] | undefined
  setConversation: React.Dispatch<React.SetStateAction<IConversation | undefined>>

  calculateConversationName(conversations: IUserPerConversations[] | undefined, length: number): string
}

const SideMenu: FC<ISideMenuProps> = (props: ISideMenuProps) => {

  function handleConversationName(users: IUserPerConversations): string {
    if (users.conversation?.title != null) {
      return users.conversation.title;
    }
    return props.calculateConversationName(users.conversation?.userPerConversations, 18);
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
                <ListItemText primary={handleConversationName(userPerConversation)} />
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