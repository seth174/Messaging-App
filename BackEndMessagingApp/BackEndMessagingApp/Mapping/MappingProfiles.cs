using BackEndMessagingApp.Models;
using BackEndMessagingApp.DTO;
using AutoMapper;

namespace BackEndMessagingApp.Mapping
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {

            CreateMap<User, UserListDTO>();
        }
    }
}
