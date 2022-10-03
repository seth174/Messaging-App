import { IUser } from "../models/IUser";
import axios from "axios";

const BASE_URL = 'https://localhost:7060/api/'

const config = {
  headers: { Authorization: `Bearer ${window.sessionStorage.getItem("token")}` }
};


export const getUsers = async (): Promise<IUser[]> => {
  const response = await axios
    .get(`${BASE_URL}users/`)
    .then((result: { data: IUser[]; }) => {
      const response: IUser[] = result.data;
      return response;
    })
    .catch((err) => {
      console.log("GET ERR:", err);
      return [];
    });

  return response;
}

export const addUsers = (user: IUser) => {
  axios
    .post(`${BASE_URL}users/`, user)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("POST ERR:", err);
    });
};

export const getUser = async (id: number): Promise<IUser> => {
  const response = await axios
    .get(`${BASE_URL}users/${id}`, config)
    .then((result) => {
      console.log(result.data);
      const response: IUser = result.data;
      return response;
    })
    .catch((err) => {
      console.log("POST ERR:", err);
      return {} as IUser;
    });

  console.log("HERE", response);
  return response;
};

export const getUserByEmail = async (email: string): Promise<IUser> => {
  const response = await axios
    .get(`${BASE_URL}users/GetUser/${email}`)
    .then((result: { data: IUser; }) => {
      const response: IUser = result.data;
      return response;
    })
    .catch((err) => {
      console.log("GET ERR:", err);
      return {} as IUser;
    });

  console.log("RESPONE", response);
  return response;
};
