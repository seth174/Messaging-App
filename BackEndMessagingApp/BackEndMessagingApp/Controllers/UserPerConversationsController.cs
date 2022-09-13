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

        // PUT: api/UserPerConversations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserPerConversation(int id, UserPerConversation userPerConversation)
        {
            if (id != userPerConversation.Id)
            {
                return BadRequest();
            }

            _context.Entry(userPerConversation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserPerConversationExists(id))
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

        // POST: api/UserPerConversations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserPerConversation>> PostUserPerConversation(UserPerConversation userPerConversation)
        {
          if (_context.UserPerConversations == null)
          {
              return Problem("Entity set 'MessagingAppContext.UserPerConversations'  is null.");
          }
            _context.UserPerConversations.Add(userPerConversation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserPerConversation", new { id = userPerConversation.Id }, userPerConversation);
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

        private bool UserPerConversationExists(int id)
        {
            return (_context.UserPerConversations?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
