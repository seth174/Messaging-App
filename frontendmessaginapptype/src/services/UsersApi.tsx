import { IUser } from "../models/IUser";
import axios from "axios";
import getHeader from "./BaseApi";

const BASE_URL = 'https://localhost:7060/api/'


export const getUsers = async (): Promise<IUser[]> => {
  const response = await axios
    .get(`${BASE_URL}users/`, getHeader())
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

export const addUsers = async (user: IUser): Promise<IUser> => {
  const result: IUser = await axios
    .post(`${BASE_URL}users/`, user, getHeader())
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return {} as IUser;
    });
  console.log("FINAL", result);
  return result;
};

export const getUser = async (id: number): Promise<IUser> => {
  const response = await axios
    .get(`${BASE_URL}users/${id}`, getHeader())
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
    .get(`${BASE_URL}users/GetUser/${email}`, getHeader())
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
