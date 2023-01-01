import { Autocomplete, Box, createFilterOptions, FilterOptionsState, IconButton, TextField, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react"
import { IUser } from "../models/IUser";
import UserBox from "./user-box";

interface INewConversationSearchBarProps {
  users: IUser[];
  addedUsers: IUser[];
  setAddedUsers: Dispatch<SetStateAction<IUser[]>>;
}

const NewConversationSearchBar: FC<INewConversationSearchBarProps> = (props: INewConversationSearchBarProps) => {

  const OPTIONS_LIMIT = 8;
  const defaultFilterOptions = createFilterOptions();

  const [email, setEmail] = useState<string>("");

  const [addedUsersSet, setAddedUsersSet] = useState<Set<string>>(new Set());

  function handleOnChange(event: React.SyntheticEvent<Element, Event>, element: unknown) {

    const newUser: IUser = element as IUser;

    setEmail("");

    if (addedUsersSet.has(newUser.email)) {
      return;
    }

    addedUsersSet.add(newUser.email);
    props.setAddedUsers((oldValue) => {
      return props.addedUsers.concat(newUser);
    });

  }

  function cancelAddedUser(user: IUser) {
    props.setAddedUsers((oldValue) => oldValue.filter(item => item !== user))
    addedUsersSet.delete(user.email);
  }

  const filterOptions = (options: unknown[], state: FilterOptionsState<unknown>) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

  return (
    <Box sx={{ backgroundColor: "green", py: 1.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ ml: 2 }}>To: </Typography>
        {props.addedUsers.map((user, index) => {
          return (
            <UserBox key={index} name={user.name} handleClick={() => cancelAddedUser(user)} />
          )
        })}
        <Autocomplete
          value={email}
          filterOptions={filterOptions}
          options={props.users}
          autoHighlight
          disableClearable
          renderInput={(params) => (
            <TextField {...params} variant="standard" />
          )}
          isOptionEqualToValue={(option: any, value: any) => option.email === value}
          getOptionLabel={(option) => (option as IUser).name ?? email}
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
