import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NavButton from "./nav-button";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar: FC = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/', { replace: true });

  return (
    <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} position='static'>

      <Toolbar sx={{ my: 2 }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mx: 4,
          }}
          onClick={goHome}
        >
          <MessageOutlinedIcon />
        </IconButton>

        <Typography
          variant='h6'
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            flexGrow: 1
          }}
        >
          Seth's Messaging App
        </Typography>
        <NavButton
          color="inherit"
          sx={{ mx: 2 }}
          component={NavLink}
          to={'/home'}
        >
          Home
        </NavButton>
        <Button
          color="inherit"
          sx={{ mx: 2 }}
          component={NavLink}
          to={'/login'}
        >
          Login
        </Button>
        <Button
          color="inherit"
          sx={{ mx: 2 }}
          component={NavLink}
          to={'/signup'}
        >
          Signup
        </Button>

      </Toolbar>
    </AppBar>

  );
}

export default NavBar;