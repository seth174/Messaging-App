import { IUser } from "../models/IUser";
import axios from "axios";

const BASE_URL = 'https://localhost:7060/api/'


const loginUser = async (email: string): Promise<IUser> => {
    console.log('here', email)
    const response = await axios
        .post(`${BASE_URL}login/`, email)
        .then((result: { data: IUser; }) => {
            const response: IUser = result.data;
            return response;
        })
        .catch((err) => {
            console.log("GET ERR:", err);
            return {} as IUser;
        });


    console.log(response);

    return response;
}

export default loginUser;