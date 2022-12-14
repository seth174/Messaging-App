using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEndMessagingApp.Data;
using BackEndMessagingApp.Models;
using Microsoft.AspNetCore.Authorization;
using BackEndMessagingApp.Repository;
using BackEndMessagingApp.DTO;
using AutoMapper;
using BackEndMessagingApp.DTO.UserDTO;

namespace BackEndMessagingApp.Controllers
{

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MessagingAppContext _context;
        private IJWTManagerRepository _jWTManager;
        private IMapper _mapper;

        public UsersController(MessagingAppContext context, IJWTManagerRepository jWTManager, IMapper mapper)
        {
            _context = context;
            _jWTManager = jWTManager;
            _mapper = mapper;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserListDTO>>> GetUsers()
        {
            if (_context.Users == null)
            {
                return NotFound();
            }

            var users = await _context.Users.OrderBy(x => x.Email).ToListAsync();
            return _mapper.Map<List<UserListDTO>>(users);
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDetailsDTO>> GetUser(int id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }

            var user = await _context.
                Users.Include(x => x.userPerConversations).
                ThenInclude(x => x.Conversation).
                ThenInclude(x => x.UserPerConversations).
               ThenInclude(x => x.User).
                FirstOrDefaultAsync(x => x.Id == id);



            if (user == null)
            {
                return NotFound();
            }

            return _mapper.Map<UserDetailsDTO>(user);
        }


        [AllowAnonymous]
        [Route("[action]/{email}")]
        [HttpGet]
        public async Task<ActionResult<User>> GetUser(String email)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = await _context.Users.FirstOrDefaultAsync((x) => x.Email == email);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<UserCreateDto>> PostUser(UserCreateDto user)
        {
            if (_context.Users == null)
            {
                return Problem("Entity set 'MessagingAppContext.Users'  is null.");
            }

            var createUser = _mapper.Map<User>(user);

            try
            {
                _context.Users.Add(createUser);

                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetUser), new { id = createUser.Id }, user);
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("authenticate")]
        public IActionResult Authenticate(LoginRequest2 request)
        {
            var token = _jWTManager.Authenticate(request, _context);

            if (token == null)
            {
                return Unauthorized();
            }

            return Ok(token);
        }

        private bool UserExists(int id)
        {
            return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
