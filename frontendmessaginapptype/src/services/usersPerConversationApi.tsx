import axios from "axios";
import { IUser } from "../models/IUser";
import { IUserPerConversations } from "../models/IUserPerConversations";
import getHeader from "./BaseApi";

interface IAddUsersPerConversationPost {
  userId: number
  conversationId: number
}

const BASE_URL = 'https://localhost:7060/api/'

export const addUsersPerConversation = async (userId: number, conversationId: number): Promise<IUserPerConversations> => {
  const newUsersPerConversation: IAddUsersPerConversationPost = { userId: userId, conversationId: conversationId };
  const response = await axios
    .post(`${BASE_URL}UserPerConversations`, newUsersPerConversation, getHeader())
    .then((result) => {
      const response = result.data;
      return response;
    })
    .catch((err) => {
      console.log("Error adding user per conversation", err);
      return {} as IUserPerConversations;
    })
  console.log("Added user", response);
  return response;

}