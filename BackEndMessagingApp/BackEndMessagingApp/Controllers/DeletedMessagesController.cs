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
    public class DeletedMessagesController : ControllerBase
    {
        private readonly MessagingAppContext _context;

        public DeletedMessagesController(MessagingAppContext context)
        {
            _context = context;
        }

        // GET: api/DeletedMessages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeletedMessage>>> GetDeletedMessages()
        {
          if (_context.DeletedMessages == null)
          {
              return NotFound();
          }
            return await _context.DeletedMessages.ToListAsync();
        }

        // GET: api/DeletedMessages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DeletedMessage>> GetDeletedMessage(int id)
        {
          if (_context.DeletedMessages == null)
          {
              return NotFound();
          }
            var deletedMessage = await _context.DeletedMessages.FindAsync(id);

            if (deletedMessage == null)
            {
                return NotFound();
            }

            return deletedMessage;
        }

        // PUT: api/DeletedMessages/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeletedMessage(int id, DeletedMessage deletedMessage)
        {
            if (id != deletedMessage.Id)
            {
                return BadRequest();
            }

            _context.Entry(deletedMessage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeletedMessageExists(id))
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

        // POST: api/DeletedMessages
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DeletedMessage>> PostDeletedMessage(DeletedMessage deletedMessage)
        {
          if (_context.DeletedMessages == null)
          {
              return Problem("Entity set 'MessagingAppContext.DeletedMessages'  is null.");
          }
            _context.DeletedMessages.Add(deletedMessage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDeletedMessage", new { id = deletedMessage.Id }, deletedMessage);
        }

        // DELETE: api/DeletedMessages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeletedMessage(int id)
        {
            if (_context.DeletedMessages == null)
            {
                return NotFound();
            }
            var deletedMessage = await _context.DeletedMessages.FindAsync(id);
            if (deletedMessage == null)
            {
                return NotFound();
            }

            _context.DeletedMessages.Remove(deletedMessage);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DeletedMessageExists(int id)
        {
            return (_context.DeletedMessages?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
