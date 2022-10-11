import { Box, TextField, Typography } from "@mui/material";
import { FC, useState } from "react"
import { IUser } from "../models/IUser";

interface INewConversationSearchBarProps {
  users: IUser[]
}

const NewConversationSearchBar: FC<INewConversationSearchBarProps> = (props: INewConversationSearchBarProps) => {

  const [email, setEmail] = useState<string>("");

  const [addedUsers, setAddedUsers] = useState<Set<IUser>>(new Set<IUser>);

  function handleOnKeyDown(event: React.KeyboardEvent<HTMLImageElement>) {
    if (event.key == "Enter") {
      setAddedUsers((oldValue) => {
        return (
          {
            ...oldValue,

          }
        );
      })
    }
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ ml: 2 }}>To: </Typography>
        <TextField
          variant="standard" // <== changed this
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          onKeyDown={handleOnKeyDown}
          placeholder="Email of one or more people"
          InputProps={{
            //disableUnderline: true, // <== added this
          }}
          sx={{ mb: 1.5, ml: 2, mr: 8 }}
        />
      </Box>

    </Box>
  );
}

export default NewConversationSearchBar;