import React, { FC, useEffect, useState } from "react";
import MainPageNavBar from "../components/main-page-nav-bar";
import { IUser } from "../models/IUser";
import { getUsers } from "../services/UsersApi";

const Main: FC = () => {

  const [users, setUsers] = useState<IUser[]>();



  useEffect(() => {
    async function get() {
      const users: IUser[] = await getUsers();
      setUsers(users);
      return users;
    }
    getUsers();
  }, []);

  return (
    <div>
      <MainPageNavBar />
      <h1>Main Page</h1>
      <h1>{users?.length}</h1>
    </div>

  );
}

export default Main;