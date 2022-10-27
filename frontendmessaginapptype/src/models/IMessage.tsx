export interface IMessage{
  id?: number
  messageText: string
  createdDate: Date
  imageURL?: string
  userId: number
  conversationId: number
}