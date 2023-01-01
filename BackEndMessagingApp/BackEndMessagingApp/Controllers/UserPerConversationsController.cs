using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEndMessagingApp.Data;
using BackEndMessagingApp.Models;
using BackEndMessagingApp.DTO.UserPerConversationDTO;
using AutoMapper;

namespace BackEndMessagingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserPerConversationsController : ControllerBase
    {
        private readonly MessagingAppContext _context;
        private readonly IMapper _mapper;

        public UserPerConversationsController(MessagingAppContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
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

        [HttpPost]
        public async Task<ActionResult<UserPerConversation>> PostUserPerConversation(UserPerConversationCreateDTO newUserPerConversation)
        {
            if(_context.UserPerConversations == null)
            {
                return Problem("Entity set 'MessagingAppContext.Messages'  is null.");
            }

            var userPerConversation = _mapper.Map<UserPerConversation>(newUserPerConversation);
            _context.UserPerConversations.Add(userPerConversation);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(UserPerConversationsController.GetUserPerConversation), new { Id = 1, Version = "1.0" }, userPerConversation);
        }

    }
}
