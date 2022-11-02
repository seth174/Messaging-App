import axios from "axios";
import { IConversation } from "../models/IConversation";
import getHeader from "./BaseApi";

const BASE_URL = 'https://localhost:7060/api/'

export const getConversationMessages = async (id: number): Promise<IConversation>  => {
  const response = await axios
  .get(`${BASE_URL}Conversations/${id}/Messages`)
  .then((result) => {
    const response: IConversation = result.data;
    return response;
  })
  .catch((err) => {
    console.log("POST ERR:", err);
    return {} as IConversation;
  });

return response;
}