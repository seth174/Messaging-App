import { Box, IconButton, makeStyles, TextField } from "@mui/material";
import { FC, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import { Form } from "react-router-dom";
import { IConversation } from "../models/IConversation";
import { IMessage } from "../models/IMessage";
import postMessage from '../services/MessageApi';

interface IComposeMessageBoxProps {
  conversation?: IConversation
}

const ComposeMessageBox: FC<IComposeMessageBoxProps> = (props: IComposeMessageBoxProps) => {

  const [message, setMessage] = useState<string>("");

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue : string = event.target.value;
    if(newValue.length > 0 && newValue.substring(newValue.length - 1) === '\n') {
      
      const stringUserId = window.sessionStorage.getItem("user_id")
      const user_id : number = stringUserId  != null ? +stringUserId : -1;
      const newMessage : IMessage = {userId: user_id, createdDate: new Date(), messageText: message, conversationId: props.conversation?.id} as IMessage;
      postMessage(newMessage);
      setMessage("");
      return;
    }
    setMessage(newValue);
  }

  const handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter' ){
       console.log('enter*');}
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mx: 5, border: 1, borderRadius: 2, p: 1, my: 1.5 }}>

      <TextField
        sx={{ flexGrow: 1, mx: 2, mb: 1 }}
        multiline
        variant="standard"
        value={message}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleDataChange(event)}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => handleKeyPressed(event)}
      />
      <IconButton
        color="success"
        disabled={message.length == 0 ? true : false}
        type="submit"
      >
        <SendIcon />
      </IconButton>
    </Box>
  )
}

export default ComposeMessageBox;