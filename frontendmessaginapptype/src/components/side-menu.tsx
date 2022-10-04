import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { IConversation } from "../models/IConversation";
import { IUserPerConversations } from "../models/IUserPerConversations";

const drawerWidth = 300;

interface ISideMenuProps {
  userPerConversations: IUserPerConversations[] | undefined
}

const SideMenu: FC<ISideMenuProps> = (props: ISideMenuProps) => {


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
          {props.userPerConversations?.map((userPerConversation, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {userPerConversation?.conversation?.userPerConversations?.length == 2 ?
                    <div>
                      <PersonIcon color="primary" />
                    </div>
                    :
                    <div>
                      <PersonIcon color="primary" />
                      <AddIcon color="primary" />
                    </div>
                  }
                </ListItemIcon>
                <ListItemText primary={userPerConversation.conversation?.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}


export default SideMenu;