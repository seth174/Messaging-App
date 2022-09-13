namespace BackEndMessagingApp.Models
{
    public class Conversation
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public ICollection<UserPerConversation>? UsersPerConversations;
        public ICollection<DeletedConversation>? DeletedConversations;
    }
}
