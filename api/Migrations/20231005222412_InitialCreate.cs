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
                    LandArea = table.Column<int>(type: "INTEGER", nullable: false),
                    FloorArea = table.Column<int>(type: "INTEGER", nullable: false),
                    InternalArea = table.Column<int>(type: "INTEGER", nullable: false),
                    RoomsCount = table.Column<int>(type: "INTEGER", nullable: false),
                    BathroomsCount = table.Column<int>(type: "INTEGER", nullable: false),
                    FloorsCount = table.Column<int>(type: "INTEGER", nullable: false),
                    ParkingSpacesCount = table.Column<int>(type: "INTEGER", nullable: false),
                    GarageSpacesCount = table.Column<int>(type: "INTEGER", nullable: false),
                    Currency = table.Column<string>(type: "TEXT", nullable: false),
                    InitialPrice = table.Column<long>(type: "INTEGER", nullable: false),
                    Price = table.Column<long>(type: "INTEGER", nullable: false),
                    Commission = table.Column<long>(type: "INTEGER", nullable: true),
                    IsDetached = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasFurniture = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasTerrace = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasBalcony = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasPool = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasBasement = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasRefrigerator = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasOven = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasAirConditioning = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasDishwasher = table.Column<bool>(type: "INTEGER", nullable: false),
                    HasWashingMachine = table.Column<bool>(type: "INTEGER", nullable: false),
                    EpcRating = table.Column<byte>(type: "INTEGER", nullable: true),
                    YearBuilt = table.Column<int>(type: "INTEGER", nullable: true),
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
