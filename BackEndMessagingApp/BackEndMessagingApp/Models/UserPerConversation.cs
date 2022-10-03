using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEndMessagingApp.Models
{
    public class UserPerConversation
    {

        [ForeignKey("Conversation")]
        public int ConversationId { get; set; }

        public Conversation? Conversation { get; set; }


        [ForeignKey("User")]
        public int UserId { get; set; }

        public Models.User? User { get; set; }
    }
}
