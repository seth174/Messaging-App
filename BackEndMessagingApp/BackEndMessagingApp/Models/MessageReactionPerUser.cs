using System.ComponentModel.DataAnnotations.Schema;

namespace BackEndMessagingApp.Models
{
    public class MessageReactionPerUser
    {
        public int Id { get; set; }
        public string Reaction { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public User? User { get; set; }

        [ForeignKey("Message")]
        public int MessageId { get; set; }
        public Message? Message { get; set; }


    }
}
