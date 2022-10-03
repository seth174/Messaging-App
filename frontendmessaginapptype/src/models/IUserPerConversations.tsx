import { IConversation } from "./IConversation"
import { IUser } from "./IUser"

export interface IUserPerConversations {
  conversation?: IConversation
  user?: IUser
}