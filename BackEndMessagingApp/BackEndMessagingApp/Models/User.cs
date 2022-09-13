namespace BackEndMessagingApp.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public ICollection<UserPerConversation>? userPerConversations { get; set; }
        public ICollection<DeletedMessage> deletedMessages { get; set; }
        public ICollection<Message> messages { get; set; }
        public ICollection<DeletedConversation> deletedConversations { get; set; }
        public ICollection<MessageReactionPerUser> messagesReactionPerUser { get; set; }

    }
}
