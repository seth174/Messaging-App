import { Box, Stack, ThemeProvider, Typography, useTheme } from "@mui/material";
import { border, borderRadius, display } from "@mui/system";
import { FC } from "react";
import { IMessage } from "../models/IMessage";
import { MessageTextTheme } from '../themes/theme'

interface IDisplayMessagesProps {
  messages: IMessage[] | undefined
  isGroup: boolean | undefined
}

const DisplayMessages: FC<IDisplayMessagesProps> = (props: IDisplayMessagesProps) => {

  console.log("is groudp: ", props.isGroup);

  const theme = useTheme();

  return (
    <Stack >
      {props.messages?.map((message: IMessage, index: number) => {
        const stringUserId = window.sessionStorage.getItem("user_id")
        const user_id: number = stringUserId != null ? +stringUserId : -1;
        let isMyMessage: boolean = false;

        if (message.user == null) {
          isMyMessage = message.userId == user_id;
        }
        else {
          isMyMessage = message.user?.id == user_id;
        }
        return (
          <ThemeProvider theme={MessageTextTheme} key={index}>
            <Box sx={{ textAlign: isMyMessage ? 'right' : 'left' }}>
              <Box
                sx={{
                  backgroundColor: isMyMessage ? theme.palette.primary.main : theme.palette.grey[400],
                  display: 'inline-block',
                  maxWidth: '70%',
                  borderRadius: '15px',
                  p: 5,
                  m: 5
                }}
              >
                {
                  props.isGroup
                  && !isMyMessage
                  &&
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>{message.user?.name}</h1>
                    <h1>{message.createdDate.toString()}</h1>
                  </Box>}
                <Typography
                  sx={{
                    textAlign: 'left',
                    color: isMyMessage ? theme.palette.common.white : theme.palette.common.black,
                    borderRadius: '16px',

                  }}
                  variant="h5"
                >
                  {message.messageText}
                </Typography>
              </Box>

            </Box>
          </ThemeProvider>
        )
      })}
    </Stack>
  )
}

export default DisplayMessages;