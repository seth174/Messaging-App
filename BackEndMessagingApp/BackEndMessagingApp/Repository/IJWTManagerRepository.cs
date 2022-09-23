using BackEndMessagingApp.Data;
using BackEndMessagingApp.Models;

namespace BackEndMessagingApp.Repository
{
    public interface IJWTManagerRepository
    {
        Tokens Authenticate(LoginRequest2 request, MessagingAppContext context);
    }
}
