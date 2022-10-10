import { Box, Typography } from "@mui/material"
import { FC } from "react"
import { IUser } from "../models/IUser";
import { IUserPerConversations } from "../models/IUserPerConversations";

interface IMessageHeaderProps {
  users: IUserPerConversations[] | undefined
}

const MessageHeader: FC<IMessageHeaderProps> = (props: IMessageHeaderProps) => {

  const getUserNames = (props: IMessageHeaderProps) => {
    let title: string = "";
    props.users?.forEach((user, index) => {
      title += user.user?.email + ', '
    })

    return title.substring(0, title.length - 2);
  }

  return (
    <Box sx={{ py: 1 }}>
      <Typography
        fontWeight={{ fontWeight: 'bold' }}
        variant="h5"
        color='secondary'
      >
        {getUserNames(props)}
      </Typography>
    </Box>

  );
}

export default MessageHeader;

