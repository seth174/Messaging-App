import { FC, useContext } from "react";
import NavBar from "../components/nav-bar";
import { authenticatedContext } from '../context/authenticated-context'
import MainPageNavBar from "../components/main-page-nav-bar";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Home: FC = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(authenticatedContext);


  return (
    <div>
      {!isAuthenticated ? <NavBar /> : <MainPageNavBar />}
      <h1>TEST</h1>
      <h1>Home</h1>
      <Button>TEST</Button>
      <Box sx={{ ml: 1, p: 1, bgcolor: 'primary.main', borderRadius: '15px', display: 'inline-flex', flexWrap: 'wrap' }}>
        <Typography
          sx={{ color: 'white', fontWeight: "bold" }}
        >
          Hello
        </Typography>
        <IconButton
          size="small"
          color="inherit"
        >
          <CloseIcon />
        </IconButton>

      </Box>
    </div>

  );
}

export default Home;