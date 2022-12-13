using BackEndMessagingApp.DTO.ConversationDTO;
using BackEndMessagingApp.DTO.UserDTO;

namespace BackEndMessagingApp.DTO.UserPerConversationDTO
{
    public class UserPerConversationDTO
    {

        public ConversationUserListDTO? Conversation { get; set; }

        public UserListDTO User { get; set; }
    }
}
