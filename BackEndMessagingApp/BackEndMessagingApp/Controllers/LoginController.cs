using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEndMessagingApp.Data;
using BackEndMessagingApp.Models;

namespace BackEndMessagingApp.Controllers
{

    public class LoginRequest
    {
        public string Email { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly MessagingAppContext _context;

        public LoginController(MessagingAppContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostLogin(LoginRequest request)
        {
            if (_context.Users == null)
            {
                return Problem("Entity set 'MessagingAppContext.Users'  is null.");
            }
            User newUser = _context.Users.Where(x => x.Email == request.Email).FirstOrDefault();
            if (newUser == null){
                return NotFound(newUser);
            }
            else
            {
                return Ok(newUser);
            }           
        }
    }
}
