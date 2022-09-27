

namespace BackEndMessagingApp.DTO
{
    public class UserPerConversationDTO
    {
        public int Id { get; set; }

        public ConversationListDTO? Conversation { get; set; }

        public Models.User? user { get; set; }
    }
}
