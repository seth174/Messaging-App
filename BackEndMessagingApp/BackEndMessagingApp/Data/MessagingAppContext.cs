using BackEndMessagingApp.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEndMessagingApp.Data
{

    public class MessagingAppContext : DbContext
    {

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            foreach (var relationship in modelbuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

            base.OnModelCreating(modelbuilder);
        }
        public MessagingAppContext() { }
        public MessagingAppContext(DbContextOptions<MessagingAppContext> options) : base(options)
        {

        }

        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<DeletedConversation> DeletedConversations { get; set; }
        public DbSet<DeletedMessage> DeletedMessages { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<MessageReactionPerUser> MessageReactionPerUsers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserPerConversation> UserPerConversations { get; set; }

    }
}
