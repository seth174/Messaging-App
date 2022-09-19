import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUsers } from './services/UsersApi';
import { IUser } from './models/IUser'
import Login from './routes/login'
import Signup from './routes/signup';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function loadUsers() {

      const users = await getUsers();

      setUsers(users);
      return users;
    }
    loadUsers();
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
