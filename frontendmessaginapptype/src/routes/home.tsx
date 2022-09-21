import { FC, useContext } from "react";
import NavBar from "../components/nav-bar";
import { authenticatedContext } from '../context/authenticated-context'
import MainPageNavBar from "../components/main-page-nav-bar";

const Home: FC = () => {

	const { isAuthenticated, setIsAuthenticated } = useContext(authenticatedContext);


	return (
		<div>
			{!isAuthenticated ? <NavBar /> : <MainPageNavBar />}
			<h1>Home</h1>
		</div>

	);
}

export default Home;