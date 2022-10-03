import { IUserPerConversations } from "./IUserPerConversations"

export interface IUser {
  id?: number,
  name: string,
  email: string,
  password?: string

  userPerConversations?: IUserPerConversations[]

}