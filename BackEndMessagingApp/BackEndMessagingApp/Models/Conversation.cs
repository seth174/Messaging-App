using System.ComponentModel.DataAnnotations;

namespace BackEndMessagingApp.Models
{
    public class Conversation
    {
        public int Id { get; set; }
        
        [StringLength(150)]
        public string? Title { get; set; }
        public ICollection<UserPerConversation>? UsersPerConversations;
        public ICollection<DeletedConversation>? DeletedConversations;
    }
}
