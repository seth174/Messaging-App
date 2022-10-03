using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEndMessagingApp.Data;
using BackEndMessagingApp.Models;

namespace BackEndMessagingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserPerConversationsController : ControllerBase
    {
        private readonly MessagingAppContext _context;

        public UserPerConversationsController(MessagingAppContext context)
        {
            _context = context;
        }

        // GET: api/UserPerConversations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserPerConversation>>> GetUserPerConversations()
        {
          if (_context.UserPerConversations == null)
          {
              return NotFound();
          }
            return await _context.UserPerConversations.ToListAsync();
        }

        // GET: api/UserPerConversations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserPerConversation>> GetUserPerConversation(int id)
        {
          if (_context.UserPerConversations == null)
          {
              return NotFound();
          }
            var userPerConversation = await _context.UserPerConversations.FindAsync(id);

            if (userPerConversation == null)
            {
                return NotFound();
            }

            return userPerConversation;
        }


        // DELETE: api/UserPerConversations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserPerConversation(int id)
        {
            if (_context.UserPerConversations == null)
            {
                return NotFound();
            }
            var userPerConversation = await _context.UserPerConversations.FindAsync(id);
            if (userPerConversation == null)
            {
                return NotFound();
            }

            _context.UserPerConversations.Remove(userPerConversation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
