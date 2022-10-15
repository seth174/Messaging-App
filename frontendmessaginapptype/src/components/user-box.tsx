import { Box, IconButton, makeStyles, Typography } from "@mui/material"
import { FC } from "react"
import { IUser } from "../models/IUser";
import CloseIcon from '@mui/icons-material/Close';
import { textAlign } from "@mui/system";

interface IUserBoxProps {
  name: string;
  handleClick(): void;
}

const UserBox: FC<IUserBoxProps> = (props: IUserBoxProps) => {
  return (
    <Box sx={{ ml: 1, p: 1, bgcolor: 'primary.main', borderRadius: '15px' }}>
      <Typography
        sx={{
          color: 'white',
          fontWeight: "bold",
          display: 'inline-flex',
          alignItems: 'center'
        }}
      >
        {props.name}
        <IconButton size="small" color="inherit" onClick={() => props.handleClick()}><CloseIcon /></IconButton>
      </Typography>


    </Box >
  )
}

export default UserBox;