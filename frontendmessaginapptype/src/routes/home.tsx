import { FC, useContext } from "react";
import NavBar from "../components/nav-bar";
import { authenticatedContext } from '../context/authenticated-context'
import MainPageNavBar from "../components/main-page-nav-bar";
import { Button, Toolbar } from "@mui/material";

const Home: FC = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(authenticatedContext);


  return (
    <div>
      {!isAuthenticated ? <NavBar /> : <MainPageNavBar />}
      <h1>TEST</h1>
      <h1>Home</h1>
      <Button>TEST</Button>
    </div>

  );
}

export default Home;