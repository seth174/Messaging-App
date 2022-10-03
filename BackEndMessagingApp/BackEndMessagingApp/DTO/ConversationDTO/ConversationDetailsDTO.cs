using BackEndMessagingApp.DTO.UserPerConversationDTO;
using System.ComponentModel.DataAnnotations;

namespace BackEndMessagingApp.DTO.ConversationDTO
{
    public class ConversationDetailsDTO
    {
        public int Id { get; set; }

        [StringLength(150)]
        public string? Title { get; set; }
        public string? description { get; set; }
        public ICollection<UserPerConversationUserDTO> UserPerConversations { get; set; }
    }
}
