import { Box, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

const Conversation: FC = () => {
  return (
    <Box>
      <Toolbar sx={{ height: 150 }} />
      <Typography>Hello this is a Conversation</Typography>
    </Box>
  );
}

export default Conversation;
