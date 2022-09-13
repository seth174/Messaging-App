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
    public class MessageReactionPerUsersController : ControllerBase
    {
        private readonly MessagingAppContext _context;

        public MessageReactionPerUsersController(MessagingAppContext context)
        {
            _context = context;
        }

        // GET: api/MessageReactionPerUsers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MessageReactionPerUser>>> GetMessageReactionPerUsers()
        {
          if (_context.MessageReactionPerUsers == null)
          {
              return NotFound();
          }
            return await _context.MessageReactionPerUsers.ToListAsync();
        }

        // GET: api/MessageReactionPerUsers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MessageReactionPerUser>> GetMessageReactionPerUser(int id)
        {
          if (_context.MessageReactionPerUsers == null)
          {
              return NotFound();
          }
            var messageReactionPerUser = await _context.MessageReactionPerUsers.FindAsync(id);

            if (messageReactionPerUser == null)
            {
                return NotFound();
            }

            return messageReactionPerUser;
        }

        // PUT: api/MessageReactionPerUsers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMessageReactionPerUser(int id, MessageReactionPerUser messageReactionPerUser)
        {
            if (id != messageReactionPerUser.Id)
            {
                return BadRequest();
            }

            _context.Entry(messageReactionPerUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MessageReactionPerUserExists(id))
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

        // POST: api/MessageReactionPerUsers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MessageReactionPerUser>> PostMessageReactionPerUser(MessageReactionPerUser messageReactionPerUser)
        {
          if (_context.MessageReactionPerUsers == null)
          {
              return Problem("Entity set 'MessagingAppContext.MessageReactionPerUsers'  is null.");
          }
            _context.MessageReactionPerUsers.Add(messageReactionPerUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMessageReactionPerUser", new { id = messageReactionPerUser.Id }, messageReactionPerUser);
        }

        // DELETE: api/MessageReactionPerUsers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessageReactionPerUser(int id)
        {
            if (_context.MessageReactionPerUsers == null)
            {
                return NotFound();
            }
            var messageReactionPerUser = await _context.MessageReactionPerUsers.FindAsync(id);
            if (messageReactionPerUser == null)
            {
                return NotFound();
            }

            _context.MessageReactionPerUsers.Remove(messageReactionPerUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MessageReactionPerUserExists(int id)
        {
            return (_context.MessageReactionPerUsers?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
