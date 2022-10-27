namespace BackEndMessagingApp.DTO.MessageDTO
{
    public class MessageCreateDTO
    {
        public int Id { get; set; }
        public string MessageText { get; set; } = null!;

        public DateTime CreatedDate { get; set; }

        public string? ImageURL { get; set; }

        public int UserId { get; set; }

        public int ConversationId { get; set; }
    }
}
