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

    <Box sx={{ width: '100vw' }}   >
      <Toolbar sx={{ mt: 4 }} />

      <Grid container direction="column" overflow='auto'>
        <Grid item sx={{  position: 'fixed', width: `calc(100vw - ${SIDE_MENU_WIDTH});`, zIndex: 1 }} >
          {
            props.conversation == undefined ? <Typography sx={{ py: 1.5, color: 'white', backgroundColor: 'blue' }}>New Conversation</Typography> :
              <MessageHeader users={props.conversation?.userPerConversations} calculateConversationName={props.calculateConversationName} />
          }
          {props.conversation == undefined && <NewConversationSearchBar users={props.users}/>}
        </Grid>
        <Grid item sx={{ backgroundColor: "red", mt: props.conversation == undefined ? 14.5 : 8.5, width: `calc(100% - ${SIDE_MENU_WIDTH});`, position: 'absolute' }} >

           <Toolbar sx={{my: 2}}/> 
        </Grid>
        <Grid item sx={{ backgroundColor: "white", position: 'fixed', bottom: 0, textAlign: 'center', width: `calc(100% - ${SIDE_MENU_WIDTH});` }} >
          <ComposeMessageBox conversation={props.conversation}/>
        </Grid>
      </Grid>
    </Box >

  );
}

export default Conversation;
