import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { IConversation } from "../models/IConversation";
import { IUser } from "../models/IUser";
import { IUserPerConversations } from "../models/IUserPerConversations";
import ComposeMessageBox from "./compose-message-box";
import MessageHeader from "./message-header";
import NewConversationSearchBar from "./new-conversation-search-bar"

interface IConversationProps {
  conversation: IConversation | undefined
  calculateConversationName(conversations: IUserPerConversations[], length: number): string
  users: IUser[]
}

const SIDE_MENU_WIDTH: string = '250px';



const Conversation: FC<IConversationProps> = (props: IConversationProps) => {
  return (

    <Box sx={{ width: '100vw' }} height='100vh'  >
      <Toolbar sx={{ py: 6 }} />

      <Grid container direction="column">
        <Grid item sx={{ backgroundColor: "black", position: 'fixed', width: `calc(100vw - ${SIDE_MENU_WIDTH});`, zIndex: 1 }} >
          {
            props.conversation == undefined ? <Typography sx={{ py: 1.5, color: 'white' }}>New Conversation</Typography> :
              <MessageHeader users={props.conversation?.userPerConversations} calculateConversationName={props.calculateConversationName} />
          }
        </Grid>
        <Grid item sx={{ backgroundColor: "white", width: `calc(100% - ${SIDE_MENU_WIDTH});`, position: 'fixed', mt: 8 }} >
          {props.conversation == undefined && <NewConversationSearchBar users={props.users} />}
        </Grid>
        <Grid item sx={{ backgroundColor: "red", my: 15, width: `calc(100% - ${SIDE_MENU_WIDTH});`, position: 'absolute' }} >
          <h1>HERE top</h1>
          <h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1><h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1><h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE</h1><h1>HERE</h1>
          <h1>HERE</h1>
          <h1>HERE bottto</h1>
        </Grid>
        <Toolbar sx={{ height: 1000, width: 400 }} />
        <Grid item sx={{ backgroundColor: "white", position: 'fixed', bottom: 0, width: `calc(100% - ${SIDE_MENU_WIDTH});` }} >
          <ComposeMessageBox />
        </Grid>
      </Grid>
    </Box >

  );
}

export default Conversation;
