import axios from "axios";
import { IMessage } from "../models/IMessage";
import getHeader from "./BaseApi";


const BASE_URL = 'https://localhost:7060/api/'

const postMessage = async (message: IMessage): Promise<IMessage> => {
  console.log("Message")

  const response = await axios
    .post(`${BASE_URL}Messages/`, message, getHeader())
    .then((result) => {
      console.log("CONFURSED");
      console.log(result);
      return result.data;
    })
    .catch((err) => {
      console.log("POST ERR:", err);
      return {} as IMessage;
    });

  return response;
}

export default postMessage;