import { IUser } from "../models/IUser";
import axios from "axios";
import { ILoginRequest } from "../models/ILoginRequest";

const BASE_URL = 'https://localhost:7060/api/'


const loginUser = async (request: ILoginRequest): Promise<IUser> => {
	console.log('here', request)
	const response = await axios
		.post(`${BASE_URL}Login`, request)
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