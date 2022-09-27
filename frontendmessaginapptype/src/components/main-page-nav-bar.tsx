import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { FC, useState } from "react";
import NavButton from "./nav-button";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { borderRadius, color } from "@mui/system";
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";

const MainPageNavBar: FC = () => {

  const navigate = useNavigate();
  const goHome = () => navigate('/home', { replace: true });
  const goConversations = () => navigate('/mainpage', { replace: true });
  const settings = () => navigate('/settings', { replace: true });
  const logout = () => navigate('/logout', { replace: true });

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    flexGrow: 1,
    maxWidth: '1000px',
    width: '50%',

  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,

    },
    width: '100%'
  }));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, py: 2 }}>

      <Toolbar >
        <IconButton
          id="test"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={goHome}
          sx={{
            mx: 4,
          }}
        >
          <MessageOutlinedIcon />
        </IconButton>

        <Typography variant='h6' sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
        >
          Seth's Messaging App
        </Typography>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase
            placeholder="Search Users ..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <div className="icon">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                goHome();
                handleClose();

              }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => {
                goConversations();
                handleClose();
              }}>
              Conversations
            </MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem
              onClick={() => {
                logout();
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>


      </Toolbar>
    </AppBar>
  )
}

export default MainPageNavBar;