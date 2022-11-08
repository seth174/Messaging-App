import axios from "axios";
import { IMessage } from "../models/IMessage";
import getHeader from "./BaseApi";


const BASE_URL = 'https://localhost:7060/api/'

const postMessage = (message: IMessage) => {
  console.log("Message")

  axios
    .post(`${BASE_URL}Messages/`, message, getHeader())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("POST ERR:", err);
    });
}

export default postMessage;