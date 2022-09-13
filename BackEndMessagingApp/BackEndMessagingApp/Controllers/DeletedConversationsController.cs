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
    public class DeletedConversationsController : ControllerBase
    {
        private readonly MessagingAppContext _context;

        public DeletedConversationsController(MessagingAppContext context)
        {
            _context = context;
        }

        // GET: api/DeletedConversations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeletedConversation>>> GetDeletedConversations()
        {
          if (_context.DeletedConversations == null)
          {
              return NotFound();
          }
            return await _context.DeletedConversations.ToListAsync();
        }

        // GET: api/DeletedConversations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DeletedConversation>> GetDeletedConversation(int id)
        {
          if (_context.DeletedConversations == null)
          {
              return NotFound();
          }
            var deletedConversation = await _context.DeletedConversations.FindAsync(id);

            if (deletedConversation == null)
            {
                return NotFound();
            }

            return deletedConversation;
        }

        // PUT: api/DeletedConversations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeletedConversation(int id, DeletedConversation deletedConversation)
        {
            if (id != deletedConversation.Id)
            {
                return BadRequest();
            }

            _context.Entry(deletedConversation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeletedConversationExists(id))
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

        // POST: api/DeletedConversations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DeletedConversation>> PostDeletedConversation(DeletedConversation deletedConversation)
        {
          if (_context.DeletedConversations == null)
          {
              return Problem("Entity set 'MessagingAppContext.DeletedConversations'  is null.");
          }
            _context.DeletedConversations.Add(deletedConversation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDeletedConversation", new { id = deletedConversation.Id }, deletedConversation);
        }

        // DELETE: api/DeletedConversations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeletedConversation(int id)
        {
            if (_context.DeletedConversations == null)
            {
                return NotFound();
            }
            var deletedConversation = await _context.DeletedConversations.FindAsync(id);
            if (deletedConversation == null)
            {
                return NotFound();
            }

            _context.DeletedConversations.Remove(deletedConversation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DeletedConversationExists(int id)
        {
            return (_context.DeletedConversations?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
