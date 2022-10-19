import { Box, IconButton, makeStyles, TextField } from "@mui/material";
import { FC, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import React from "react";



const ComposeMessageBox: FC = () => {

  const [message, setMessage] = useState<string>("");

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mx: 5, border: 1, borderRadius: 2, p: 1, my: 1.5 }}>
      <TextField
        sx={{ flexGrow: 1, mx: 2, mb: 1 }}
        multiline
        variant="standard"
        value={message}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleDataChange(event)}
      />
      <IconButton
        color="success"
        disabled={message.length == 0 ? true : false}
      >
        <SendIcon />
      </IconButton>

    </Box>
  )
}

export default ComposeMessageBox;