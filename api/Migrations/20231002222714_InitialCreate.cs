using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Houses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    CountryCode = table.Column<string>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    Street = table.Column<string>(type: "TEXT", nullable: true),
                    StreetNumber = table.Column<int>(type: "INTEGER", nullable: true),
                    Latitude = table.Column<double>(type: "REAL", nullable: true),
                    Longitude = table.Column<double>(type: "REAL", nullable: true),
                    Footage = table.Column<int>(type: "INTEGER", nullable: false),
                    LandFootage = table.Column<int>(type: "INTEGER", nullable: false),
                    RoomsCount = table.Column<int>(type: "INTEGER", nullable: false),
                    BathroomsCount = table.Column<int>(type: "INTEGER", nullable: false),
                    FloorsCount = table.Column<int>(type: "INTEGER", nullable: false),
                    InitialPrice = table.Column<long>(type: "INTEGER", nullable: false),
                    Currency = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<long>(type: "INTEGER", nullable: false),
                    IsDetached = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasPool = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasGarage = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasParking = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasBasement = table.Column<bool>(type: "INTEGER", nullable: false),
                    EpcRating = table.Column<byte>(type: "INTEGER", nullable: false),
                    AvailableFrom = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ReservedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    SoldAt = table.Column<DateTime>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Houses", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Houses");
        }
    }
}
