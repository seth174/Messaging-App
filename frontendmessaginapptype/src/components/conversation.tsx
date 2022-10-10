import { Box, Grid, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { IConversation } from "../models/IConversation";
import MessageHeader from "./message-header";

interface IConversationProps {
  conversation: IConversation | undefined
}

const SIDE_MENU_WIDTH: string = '250px';

const Conversation: FC<IConversationProps> = (props: IConversationProps) => {
  return (

    <Box sx={{ width: '100vw' }} height='100vh'  >
      <Toolbar sx={{ py: 6 }} />

      <Grid container direction="column">
        <Grid item sx={{ backgroundColor: "black", position: 'fixed', width: `calc(100vw - ${SIDE_MENU_WIDTH});` }} >
          <MessageHeader users={props.conversation?.userPerConversations} />
        </Grid>
        <Toolbar sx={{ height: 0 }} />
        <Grid item sx={{ backgroundColor: "red" }} >

        </Grid>
        <Toolbar sx={{ height: 115, width: 400 }} />
        <Grid item sx={{ backgroundColor: "green", position: 'fixed', bottom: 0, width: `calc(100vw - ${SIDE_MENU_WIDTH});` }} >
          <h1>test</h1>
        </Grid>
      </Grid>
    </Box >

  );
}

export default Conversation;
