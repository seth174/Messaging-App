using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEndMessagingApp.Migrations
{
    public partial class test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Conversations_Users_UserId",
                table: "Conversations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserPerConversations",
                table: "UserPerConversations");

            migrationBuilder.DropIndex(
                name: "IX_UserPerConversations_ConversationId",
                table: "UserPerConversations");

            migrationBuilder.DropIndex(
                name: "IX_Conversations_UserId",
                table: "Conversations");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Conversations");

            migrationBuilder.AlterColumn<int>(
                name: "ConversationId",
                table: "UserPerConversations",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("Relational:ColumnOrder", 1);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "UserPerConversations",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("Relational:ColumnOrder", 2);

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserPerConversations",
                table: "UserPerConversations",
                columns: new[] { "ConversationId", "UserId" });

            migrationBuilder.CreateIndex(
                name: "IX_UserPerConversations_UserId",
                table: "UserPerConversations",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserPerConversations",
                table: "UserPerConversations");

            migrationBuilder.DropIndex(
                name: "IX_UserPerConversations_UserId",
                table: "UserPerConversations");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "UserPerConversations",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("Relational:ColumnOrder", 2);

            migrationBuilder.AlterColumn<int>(
                name: "ConversationId",
                table: "UserPerConversations",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("Relational:ColumnOrder", 1);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Conversations",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserPerConversations",
                table: "UserPerConversations",
                columns: new[] { "UserId", "ConversationId" });

            migrationBuilder.CreateIndex(
                name: "IX_UserPerConversations_ConversationId",
                table: "UserPerConversations",
                column: "ConversationId");

            migrationBuilder.CreateIndex(
                name: "IX_Conversations_UserId",
                table: "Conversations",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Conversations_Users_UserId",
                table: "Conversations",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
