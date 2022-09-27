using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEndMessagingApp.Migrations
{
    public partial class MessingArround : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DeletedConversations_Conversations_ConversationId",
                table: "DeletedConversations");

            migrationBuilder.DropIndex(
                name: "IX_DeletedConversations_ConversationId",
                table: "DeletedConversations");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_DeletedConversations_ConversationId",
                table: "DeletedConversations",
                column: "ConversationId");

            migrationBuilder.AddForeignKey(
                name: "FK_DeletedConversations_Conversations_ConversationId",
                table: "DeletedConversations",
                column: "ConversationId",
                principalTable: "Conversations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
