using System.ComponentModel.DataAnnotations;

namespace BackEndMessagingApp.DTO.UserDTO
{
    public class UserListDTO
    {
        public int Id { get; set; }

        [StringLength(30)]
        public string Name { get; set; } = null!;

        [StringLength(150)]
        public string Email { get; set; } = null!;
    }
}
