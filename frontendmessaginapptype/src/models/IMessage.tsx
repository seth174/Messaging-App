import { IUser } from "./IUser"

export interface IMessage {
  id?: number
  messageText: string
  createdDate: Date
  imageURL?: string
  userId: number

  user?: IUser
  conversationId: number
}