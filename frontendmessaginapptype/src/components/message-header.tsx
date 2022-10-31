import { Box, Button, ListItemIcon, TextField, ThemeProvider, Typography } from "@mui/material"
import { FC } from "react"
import { IUser } from "../models/IUser";
import { IUserPerConversations } from "../models/IUserPerConversations";
import { theme } from '../themes/theme'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IMessageHeaderProps {
  users: IUserPerConversations[] | undefined
  calculateConversationName(conversations: IUserPerConversations[] | undefined, length: number): string
}

const MessageHeader: FC<IMessageHeaderProps> = (props: IMessageHeaderProps) => {

  return (
    <Box sx={{ py: 2, backgroundColor: 'blue' }}>
      <ThemeProvider theme={theme}>
        <Button
          sx={{ ml: 5 }}
          color='secondary'
          variant="contained"
        >
          {props.calculateConversationName(props.users, 30)}
          <ExpandMoreIcon color="action" />

        </Button>
      </ThemeProvider>
    </Box>

  );
}

export default MessageHeader;

