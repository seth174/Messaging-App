using System.ComponentModel.DataAnnotations.Schema;

namespace BackEndMessagingApp.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string MessageText { get; set; }
        public DateTime CreatedDate { get; set; }
        public string? ImageURL { get; set; }
        [ForeignKey("user")]
        public int UserId { get; set; }
        public int ConversationId { get; set; }
        public User User { get; set; }
        public ICollection<MessageReactionPerUser>? MessageReactionPerUsers { get; set; }
        public ICollection<DeletedMessage>? DeletedMessages { get; set; }

    }
}
