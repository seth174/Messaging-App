using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BackEndMessagingApp.Migrations
{
    public partial class UpdatePrimaryKeyUsersPerConversation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserPerConversations",
                table: "UserPerConversations");

            migrationBuilder.DropIndex(
                name: "IX_UserPerConversations_userId",
                table: "UserPerConversations");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "UserPerConversations");

            migrationBuilder.AlterColumn<int>(
                name: "userId",
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

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserPerConversations",
                table: "UserPerConversations",
                columns: new[] { "userId", "ConversationId" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserPerConversations",
                table: "UserPerConversations");

            migrationBuilder.AlterColumn<int>(
                name: "ConversationId",
                table: "UserPerConversations",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("Relational:ColumnOrder", 1);

            migrationBuilder.AlterColumn<int>(
                name: "userId",
                table: "UserPerConversations",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("Relational:ColumnOrder", 2);

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "UserPerConversations",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserPerConversations",
                table: "UserPerConversations",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_UserPerConversations_userId",
                table: "UserPerConversations",
                column: "userId");
        }
    }
}
