using BackEndMessagingApp.Models;
using AutoMapper;
using BackEndMessagingApp.DTO.UserDTO;
using BackEndMessagingApp.DTO.ConversationDTO;
using BackEndMessagingApp.DTO.UserPerConversationDTO;
using BackEndMessagingApp.DTO.MessageDTO;

namespace BackEndMessagingApp.Mapping
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {

            CreateMap<User, UserListDTO>();
            CreateMap<User, UserDetailsDTO>();
            CreateMap<UserCreateDto, User>();
            CreateMap<Conversation, ConversationListDTO>();
            CreateMap<ConversationDetailsDTO, Conversation>();
            
            CreateMap<UserPerConversation, UserPerConversationConversationDTO>();
            CreateMap<UserPerConversation, UserPerConversationUserDTO>();

            CreateMap<Conversation, ConversationDetailsDTO>();

            CreateMap<MessageCreateDTO, Message>();

            CreateMap<Message, MessageListDTO>();

            CreateMap<Conversation, ConversationMessageListDTO>();



        }
    }
}
