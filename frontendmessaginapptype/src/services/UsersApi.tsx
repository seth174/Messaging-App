import { IUser } from "../models/IUser";
import axios from "axios";

const BASE_URL = 'https://localhost:7060/api/'

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

export const getUser = (id: number) => {
  axios
    .get(`${BASE_URL}users/${id}`)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("POST ERR:", err);
    });
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
