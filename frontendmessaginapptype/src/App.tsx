import React, { Component, FunctionComponent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUsers } from './services/UsersApi';
import { IUser } from './models/IUser'
import Login from './routes/login'
import Signup from './routes/signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

interface IAuthenticatedProps {
	component: JSX.Element
	path: string
}

function App() {
	const [users, setUsers] = useState<IUser[]>([]);

	const [user, setUser] = useState<IUser>({} as IUser);

	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		async function loadUsers() {

			const users = await getUsers();

			setUsers(users);
			return users;
		}
		loadUsers();
	}, []);

	// const IsAuthenticated: typeof React.Fragment<IAuthenticatedProps> = (props: IAuthenticatedProps) => {
	// 	console.log('here');

	// 	return (
	// 		<Route path={props.path} element={props.component} />
	// 	);
	// }
	console.log('User is authenticated: ' + isAuthenticated);


	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Navigate replace to="/login" />}
					/>
					<Route element={<Signup />} path='/signup' />
					<Route element={<Login setUser={setUser} setIsAuthentidcated={setIsAuthenticated} />} path='/login' />
				</Routes>
			</BrowserRouter>
			<h1>Is authenticated: {isAuthenticated ? "true" : "false"}</h1>
		</div>
	);
}

export default App;
