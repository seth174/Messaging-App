using System.ComponentModel.DataAnnotations.Schema;

namespace BackEndMessagingApp.Models
{
    public class DeletedMessage
    {
        public int Id { get; set; }
        [ForeignKey("Message")]
        public int MessageId { get; set; }
        public Message? Message { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        public User? User { get; set; }

        public DateTime DateTime { get; set; }
    }
}
