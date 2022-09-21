import { createContext } from "react";

//Used to determine if logged in person is an Admin Role or regular User
export const authenticatedContext = createContext({
	isAuthenticated: true,
	setIsAuthenticated: (isAuthenticated: boolean) => { },
});