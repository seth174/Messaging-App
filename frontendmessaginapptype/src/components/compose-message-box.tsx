import { Box, TextField } from "@mui/material";
import { FC } from "react";
import SendIcon from '@mui/icons-material/Send';

const ComposeMessageBox: FC = () => {
  return (
    <Box>
      <TextField fullWidth={true} />
      <SendIcon />
    </Box>
  )
}

export default ComposeMessageBox;