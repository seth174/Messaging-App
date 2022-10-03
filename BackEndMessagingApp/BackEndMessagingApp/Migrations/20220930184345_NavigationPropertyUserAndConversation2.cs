using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEndMessagingApp.Migrations
{
    public partial class NavigationPropertyUserAndConversation2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserPerConversations_Users_userId",
                table: "UserPerConversations");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "UserPerConversations",
                newName: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserPerConversations_Users_UserId",
                table: "UserPerConversations",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserPerConversations_Users_UserId",
                table: "UserPerConversations");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "UserPerConversations",
                newName: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserPerConversations_Users_userId",
                table: "UserPerConversations",
                column: "userId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
