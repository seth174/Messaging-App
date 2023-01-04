import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { IConversation } from "../models/IConversation";
import { IUserPerConversations } from "../models/IUserPerConversations";
import CreateIcon from '@mui/icons-material/Create';

const drawerWidth = 250;

interface ISideMenuProps {
  userPerConversations: IUserPerConversations[] | undefined;
  setConversation: React.Dispatch<React.SetStateAction<IConversation | undefined>>;
  calculateConversationName(conversations: IUserPerConversations[] | undefined, length: number): string;
  joinConversation(conversation: IConversation): void;
  conversation: IConversation | undefined;

}

const SideMenu: FC<ISideMenuProps> = (props: ISideMenuProps) => {

  function handleConversationName(users: IUserPerConversations): string {
    if (users.conversation?.title != null) {
      return users.conversation.title;
    }
    return props.calculateConversationName(users.conversation?.userPerConversations, 18);
  }

  function selectConversation(userPerConversation: IUserPerConversations) {

    props.setConversation(userPerConversation.conversation);
    if (userPerConversation.conversation == undefined) return;
    props.joinConversation(userPerConversation.conversation);
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
          <ListItem disablePadding sx={{ backgroundColor: props.conversation == undefined ? "secondary.light" : "white" }}>
            <ListItemButton onClick={() => props.setConversation(undefined)}>
              <ListItemIcon>
                <CreateIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="New Conversation" />
            </ListItemButton>
          </ListItem >
          {props.userPerConversations?.map((userPerConversation, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ backgroundColor: userPerConversation?.conversation?.id == props.conversation?.id ? "secondary.light" : "white" }}
            >
              <ListItemButton onClick={() => selectConversation(userPerConversation)} >
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