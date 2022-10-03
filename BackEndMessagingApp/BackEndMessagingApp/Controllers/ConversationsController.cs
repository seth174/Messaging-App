﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEndMessagingApp.Data;
using BackEndMessagingApp.Models;
using AutoMapper;
using BackEndMessagingApp.DTO.ConversationDTO;

namespace BackEndMessagingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConversationsController : ControllerBase
    {
        private readonly MessagingAppContext _context;
        private IMapper _mapper;

        public ConversationsController(MessagingAppContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Conversations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ConversationDetailsDTO>>> GetConversations()
        {
          if (_context.Conversations == null)
          {
              return NotFound();
          }
            var conversations = await _context.Conversations.Include(x => x.UserPerConversations).ThenInclude(x => x.User).ToListAsync();
            var conversationsDTO = _mapper.Map<IEnumerable<ConversationDetailsDTO>>(conversations);

            return Ok(conversationsDTO);
        }

        // GET: api/Conversations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ConversationDetailsDTO>> GetConversation(int id)
        {
          if (_context.Conversations == null)
          {
              return NotFound();
          }
            var conversation = await _context.Conversations.Include(x => x.UserPerConversations).ThenInclude(x => x.User).FirstOrDefaultAsync(x => x.Id == id);

            if (conversation == null)
            {
                return NotFound();
            }

            _mapper.Map<ConversationDetailsDTO>(conversation);

            return Ok(conversation);
        }

        // PUT: api/Conversations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConversation(int id, Conversation conversation)
        {
            if (id != conversation.Id)
            {
                return BadRequest();
            }

            _context.Entry(conversation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConversationExists(id))
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

        // POST: api/Conversations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Conversation>> PostConversation(ConversationDetailsDTO conversation)
        {
          if (_context.Conversations == null)
          {
              return Problem("Entity set 'MessagingAppContext.Conversations'  is null.");
          }
            _context.Conversations.Add(_mapper.Map<Conversation>(conversation));
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConversation", new { id = conversation.Id }, conversation);
        }

        // DELETE: api/Conversations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConversation(int id)
        {
            if (_context.Conversations == null)
            {
                return NotFound();
            }
            var conversation = await _context.Conversations.FindAsync(id);
            if (conversation == null)
            {
                return NotFound();
            }

            _context.Conversations.Remove(conversation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ConversationExists(int id)
        {
            return (_context.Conversations?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
