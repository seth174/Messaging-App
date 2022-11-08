import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { ExecException } from "child_process";
import { FC, useEffect, useState } from "react";
import { IConversation } from "../models/IConversation";
import { IMessage } from "../models/IMessage";
import { IUser } from "../models/IUser";
import { IUserPerConversations } from "../models/IUserPerConversations";
import { getConversationMessages } from "../services/ConversationApi";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import ComposeMessageBox from "./compose-message-box";
import DisplayMessages from "./display-message";
import MessageHeader from "./message-header";
import NewConversationSearchBar from "./new-conversation-search-bar"

interface IConversationProps {
  conversation: IConversation | undefined;
  calculateConversationName(conversations: IUserPerConversations[], length: number): string;
  users: IUser[];
  sendMessage: (message: IMessage) => Promise<void>;
  setConversationMessages: (value: IConversation | undefined | ((prevVar: IConversation | undefined) => IConversation | undefined)) => void;
  conversationMessages: IConversation | undefined;
}

const SIDE_MENU_WIDTH: string = '250px';



const Conversation: FC<IConversationProps> = (props: IConversationProps) => {

  useEffect(() => {
    async function getMessages() {
      const conversationId: number | undefined = props.conversation?.id;
      if (conversationId == undefined) {
        props.setConversationMessages(undefined);
        return;
      }
      const conversation: IConversation = await getConversationMessages(conversationId);
      props.setConversationMessages(conversation);
    };
    getMessages();
  }, [props.conversation?.id]);

  console.log("conversationMessages ", props.conversationMessages);

  return (

    <Box sx={{ width: '100vw' }}   >
      <Toolbar sx={{ mt: 4 }} />

      <Grid container direction="column" overflow='auto'>
        <Grid item sx={{ position: 'fixed', width: `calc(100vw - ${SIDE_MENU_WIDTH});`, zIndex: 1 }} >
          {
            props.conversation == undefined ? <Typography sx={{ py: 1.5, color: 'white', backgroundColor: 'blue' }}>New Conversation</Typography> :
              <MessageHeader users={props.conversation?.userPerConversations} calculateConversationName={props.calculateConversationName} />
          }
          {props.conversation == undefined && <NewConversationSearchBar users={props.users} />}
        </Grid>
        <Grid item sx={{ mt: props.conversation == undefined ? 14.5 : 8.5, width: `calc(100% - ${SIDE_MENU_WIDTH});`, position: 'absolute' }} >
          <DisplayMessages
            isGroup={props.conversation == undefined ||
              props.conversation?.userPerConversations == undefined
              ? undefined : props.conversation?.userPerConversations?.length > 2}
            messages={props.conversationMessages?.messages}
          />
          <Toolbar sx={{ my: 2 }} />
        </Grid>
        <Grid item sx={{ backgroundColor: "white", position: 'fixed', bottom: 0, textAlign: 'center', width: `calc(100% - ${SIDE_MENU_WIDTH});` }} >
          <ComposeMessageBox conversation={props.conversation} sendMessage={props.sendMessage} setConversationMessage={props.setConversationMessages} />
        </Grid>
      </Grid>
    </Box >

  );
}

export default Conversation;
