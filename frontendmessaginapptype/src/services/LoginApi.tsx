import { IUser } from "../models/IUser";
import axios from "axios";
import { ILoginRequest } from "../models/ILoginRequest";
import { IToken } from "../models/IToken";

const BASE_URL = 'https://localhost:7060/api/'


const loginUser = async (request: ILoginRequest): Promise<IToken> => {
  console.log('here', request)
  const token = await axios
    .post(`${BASE_URL}Users/authenticate`, request, { headers: { "Access-Control-Allow-Origin": "*" } })
    .then((result: { data: IToken; }) => {
      const token: IToken = result.data;
      return token;
    })
    .catch((err) => {
      console.log("GET ERR:", err);
      return {} as IToken;
    });


  console.log(token);

  return token;
}

export default loginUser;