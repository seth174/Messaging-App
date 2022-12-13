using BackEndMessagingApp.DTO.UserPerConversationDTO;
using System.ComponentModel.DataAnnotations;

namespace BackEndMessagingApp.DTO.ConversationDTO
{
    public class ConversationDetailsDTO
    {
        public int Id { get; set; }

        [StringLength(150)]
        public string? Title { get; set; }
    }
}
