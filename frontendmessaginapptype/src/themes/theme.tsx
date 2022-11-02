import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

  typography: {

    button: { // Here is where you can customise the button
      fontSize: 16,
      fontWeight: 700,
      textTransform: 'none'
    },
  },
});

export const MessageTextTheme = createTheme({

  typography: {
    fontSize: 20,
    h5: {

    }
  },
});