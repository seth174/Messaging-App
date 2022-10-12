import { Autocomplete, Box, createFilterOptions, FilterOptionsState, TextField, Typography } from "@mui/material";
import { FC, Fragment, useState } from "react"
import { IUser } from "../models/IUser";

interface INewConversationSearchBarProps {
  users: IUser[]
}

const NewConversationSearchBar: FC<INewConversationSearchBarProps> = (props: INewConversationSearchBarProps) => {

  const OPTIONS_LIMIT = 8;
  const defaultFilterOptions = createFilterOptions();

  const [email, setEmail] = useState<string>("");

  const [addedUsers, setAddedUsers] = useState<IUser[]>([]);

  function handleOnChange(event: React.SyntheticEvent<Element, Event>, element: unknown) {

    const newUser: IUser = element as IUser;
    setAddedUsers((oldValue) => {
      return addedUsers.concat(newUser);
    })
  }

  const filterOptions = (options: unknown[], state: FilterOptionsState<unknown>) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ ml: 2 }}>To: </Typography>
        <Autocomplete
          filterOptions={filterOptions}
          options={props.users}
          autoHighlight
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
