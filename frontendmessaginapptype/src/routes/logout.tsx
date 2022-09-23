import { Button, Grid, Typography } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import { FC, useContext } from "react";
import MainPageNavBar from "../components/main-page-nav-bar";
import { authenticatedContext } from "../context/authenticated-context";
import { useNavigate } from "react-router-dom";

const Logout: FC = () => {

  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(authenticatedContext);
  const goHome = () => navigate('/home', { replace: true });
  const goConversations = () => navigate('/mainpage', { replace: true });
  function logout() {
    setIsAuthenticated(false);
    window.sessionStorage.setItem("token", "");
    window.sessionStorage.setItem("user_id", "");
    window.sessionStorage.setItem("isAuthorized", "false");
    goHome();
  }

  return (
    <div>
      <MainPageNavBar />
      <Box sx={{ flexGrow: 1 }}  >
        <Typography
          variant="h4"
          color='primary'
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: '40px'
          }}
        >
          Confirm Logout
        </Typography>

        <Grid
          container
          direction='row'
          alignItems="center"
          justifyContent="center"
          columnSpacing={4}
          sx={{ marginTop: '30px' }}
        >
          <Grid item md={2} sx={{ textAlign: 'center' }}>
            <Button variant="contained" sx={{ width: '100%' }} onClick={goConversations}>
              Cancel
            </Button>
          </Grid>
          <Grid item md={2} sx={{ textAlign: 'center' }}>
            <Button variant="contained" sx={{ width: '100%' }} onClick={logout}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </Box>

    </div >

  )
}

export default Logout;