using System.ComponentModel.DataAnnotations;

namespace BackEndMessagingApp.DTO
{
    public class ConversationListDTO
    {
        public int Id { get; set; }

        [StringLength(150)]
        public string? Title { get; set; }
    }
}
