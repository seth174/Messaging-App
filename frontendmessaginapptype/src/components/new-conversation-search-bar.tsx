import { Autocomplete, Box, createFilterOptions, FilterOptionsState, IconButton, TextField, Typography } from "@mui/material";
import { FC, Fragment, useState } from "react"
import { IUser } from "../models/IUser";
import UserBox from "./user-box";
import CloseIcon from '@mui/icons-material/Close';

interface INewConversationSearchBarProps {
  users: IUser[]
}

const NewConversationSearchBar: FC<INewConversationSearchBarProps> = (props: INewConversationSearchBarProps) => {

  const OPTIONS_LIMIT = 8;
  const defaultFilterOptions = createFilterOptions();

  const [email, setEmail] = useState<string>("");

  const [addedUsers, setAddedUsers] = useState<IUser[]>([]);

  const [addedUsersSet, setAddedUsersSet] = useState<Set<string>>(new Set());

  function handleOnChange(event: React.SyntheticEvent<Element, Event>, element: unknown) {

    const newUser: IUser = element as IUser;

    if (addedUsersSet.has(newUser.email)) {
      console.log("RETURNED")
      return;
    }

    addedUsersSet.add(newUser.email);

    console.log("ADDED USERS SET", addedUsersSet)
    setAddedUsers((oldValue) => {
      return addedUsers.concat(newUser);
    })
  }

  function cancelAddedUser(user: IUser) {
    console.log("ADDED USERS SET", addedUsersSet)
    setAddedUsers((oldValue) => oldValue.filter(item => item !== user))
    addedUsersSet.delete(user.email);
  }

  const filterOptions = (options: unknown[], state: FilterOptionsState<unknown>) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ ml: 2 }}>To: </Typography>
        {addedUsers.map((user, index) => {
          return (
            <UserBox key={index} name={user.name} handleClick={() => cancelAddedUser(user)} />
          )
        })}
        <Autocomplete
          filterOptions={filterOptions}
          options={props.users}
          autoHighlight
          disableClearable
          renderInput={(params) => (
            <TextField {...params} variant="standard" />
          )}
          getOptionLabel={(option) => (option as IUser).name}
          fullWidth
          id="email"
          autoComplete={true}
          onInputChange={(event: React.SyntheticEvent<Element, Event>, newValue: any) => setEmail(newValue)}
          onChange={handleOnChange}
          placeholder="Email of one or more people"
          sx={{ mb: 1.5, ml: 2, mr: 8 }}
        />
      </Box>

    </Box>
  );
}

export default NewConversationSearchBar;
