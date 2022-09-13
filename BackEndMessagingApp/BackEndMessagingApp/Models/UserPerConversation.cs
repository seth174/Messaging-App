using System.ComponentModel.DataAnnotations.Schema;

namespace BackEndMessagingApp.Models
{
    public class UserPerConversation
    {
        public int Id { get; set; }

        [ForeignKey("Conversation")]
        public int ConversationId { get; set; }

        public Conversation? Conversation { get; set; }

        [ForeignKey("User")]
        public int userId { get; set; }

        public User? user { get; set; }
    }
}
