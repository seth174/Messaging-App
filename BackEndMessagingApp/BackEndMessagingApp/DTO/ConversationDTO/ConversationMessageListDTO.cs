using BackEndMessagingApp.DTO.MessageDTO;
using System.ComponentModel.DataAnnotations;

namespace BackEndMessagingApp.DTO.ConversationDTO
{
    public class ConversationMessageListDTO
    {
        public int Id { get; set; }

        [StringLength(150)]
        public string? Title { get; set; }

        public ICollection<MessageListDTO>? Messages { get; set; }
    }
}
