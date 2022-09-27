using System.ComponentModel.DataAnnotations;

namespace BackEndMessagingApp.DTO
{
    public class UserDetailsDTO
    {
        public int Id { get; set; }

        [StringLength(30)]
        public string Name { get; set; }

        [StringLength(150)]
        public string Email { get; set; }
        public string Password { get; set; }

        public List<ConversationListDTO>? ConversationListDTOs { get; set; }
    }
}
