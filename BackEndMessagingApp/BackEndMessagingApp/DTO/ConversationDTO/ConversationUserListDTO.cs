using BackEndMessagingApp.DTO.UserPerConversationDTO;
using System.ComponentModel.DataAnnotations;

namespace BackEndMessagingApp.DTO.ConversationDTO
{
    public class ConversationUserListDTO
    {
        public int Id { get; set; }

        [StringLength(150)]
        public string? Title { get; set; }

        public ICollection<UserPerConversationUserDTO> userPerConversations { get; set; }
    }
}
