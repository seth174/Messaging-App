using BackEndMessagingApp.DTO.UserDTO;

namespace BackEndMessagingApp.DTO.MessageDTO
{
    public class MessageListDTO
    {
        public int Id { get; set; }
        public string MessageText { get; set; }
        public DateTime CreatedDate { get; set; }
        public string? ImageUrl { get; set; }
        public UserListDTO User { get; set; }
        
    }
}
