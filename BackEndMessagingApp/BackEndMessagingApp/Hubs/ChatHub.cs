using BackEndMessagingApp.Models;
using Microsoft.AspNetCore.SignalR;

namespace BackEndMessagingApp.Hubs
{
    public class ChatHub : Hub
    {

        public Task JoinConversation(Conversation conversation)
        {
            return Groups.AddToGroupAsync(Context.ConnectionId, conversation.Id.ToString());
        }

        public async Task SendMessage(Message message)
        {
            var id = message.ConversationId.ToString();

            /*await Clients.GroupExcept(id, Context.ConnectionId).SendAsync("ReceiveMessage", message);*/

            await Clients.GroupExcept(id, Context.ConnectionId).SendAsync("ReceiveMessage", message);
        }
    }
}
