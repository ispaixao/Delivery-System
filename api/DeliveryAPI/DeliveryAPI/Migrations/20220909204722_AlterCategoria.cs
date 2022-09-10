using Microsoft.EntityFrameworkCore.Migrations;

namespace DeliveryAPI.Migrations
{
    public partial class AlterCategoria : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "caminhoImagem",
                table: "Categorias",
                newName: "Foto");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Foto",
                table: "Categorias",
                newName: "caminhoImagem");
        }
    }
}
