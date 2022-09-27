using System.ComponentModel.DataAnnotations;

namespace BackEndMessagingApp.DTO
{
    public class UserListDTO
    {
        public int Id { get; set; }

        [StringLength(30)]
        public string Name { get; set; }

        [StringLength(150)]
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
