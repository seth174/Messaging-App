using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEndMessagingApp.Models
{
    public class User
    {
        public int Id { get; set; }

        [StringLength(30)]
        public string Name { get; set; }

        [StringLength(150)]
        public string Email { get; set; }
        public string Password { get; set; }

        public ICollection<UserPerConversation>? userPerConversations { get; set; }
        public ICollection<DeletedMessage>? deletedMessages { get; set; }
        public ICollection<Message>? messages { get; set; }
        public ICollection<DeletedConversation>? deletedConversations { get; set; }
        public ICollection<MessageReactionPerUser>? messagesReactionPerUser { get; set; }

    }
}
