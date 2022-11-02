import { IMessage } from "./IMessage"
import { IUserPerConversations } from "./IUserPerConversations"

export interface IConversation {
  id?: number
  title?: string

  userPerConversations?: IUserPerConversations[]

  messages?: IMessage[]
}
