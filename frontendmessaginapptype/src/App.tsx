import React, { Component, FunctionComponent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUsers } from './services/UsersApi';
import { IUser } from './models/IUser'
import Login from './routes/login'
import Signup from './routes/signup';
import Home from './routes/home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/nav-bar';
import Logout from './routes/logout';
import Main from './routes/main';
import { authenticatedContext } from './context/authenticated-context';

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

  useEffect(() => {
    async function loadAdmin() {

      if (window.sessionStorage.getItem("isAuthorized") == "true") {
        setIsAuthenticated(true);
      }
    }
    loadAdmin();
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
      <authenticatedContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <BrowserRouter>
          {!isAuthenticated &&
            <Routes>
              <Route
                path="/"
                element={<Navigate replace to="/home" />}
              />
              <Route element={<Home />} path='/home' />
              {!isAuthenticated ? <Route element={<Signup />} path='/signup' /> : <Route path="/signup" element={<Navigate replace to="/home" />} />}
              <Route element={<Login setUser={setUser} />} path='/login' />
            </Routes>
          }
          {isAuthenticated &&
            <Routes>
              <Route
                path="/"
                element={<Navigate replace to="/home" />}
              />
              <Route path="mainpage" element={<Main />} />
              <Route
                path="/login"
                element={<Navigate replace to="/home" />}
              />
              <Route path="/logout" element={<Logout />} />
              <Route element={<Home />} path='/home' />
            </Routes>
          }
        </BrowserRouter>
      </authenticatedContext.Provider >
    </div>
  );
}

export default App;
