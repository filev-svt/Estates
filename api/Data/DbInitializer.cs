using api.Entities;
using Bogus;

namespace api.Data;

public static class DbInitializer
{
    public static void Initialize(StoreContext context)
    {
        context.Database.EnsureCreated();

        if (context.Houses.Any())
        {
            return;
        }

        var houseFaker = new Faker<House>()
        .RuleFor(house => house.BathroomsCount, f => f.Random.Number(1, 5))
            .RuleFor(house => house.CountryCode, f => f.Address.CountryCode())
            .RuleFor(house => house.City, f => f.Address.City())
            .RuleFor(house => house.CreatedAt, f => f.Date.Past())
            .RuleFor(house => house.Currency, f => f.Random.Number(1, 3))
            .RuleFor(house => house.Description, f => f.Lorem.Paragraph())
            .RuleFor(house => house.EpcRating, f => f.Random.Byte(1, 100))
            .RuleFor(house => house.FloorsCount, f => f.Random.Number(1, 5))
            .RuleFor(house => house.Footage, f => f.Random.Number(50, 500))
            .RuleFor(house => house.HasBasement, f => f.Random.Bool())
            .RuleFor(house => house.HasGarage, f => f.Random.Bool())
            .RuleFor(house => house.HasParking, f => f.Random.Bool())
            .RuleFor(house => house.HasPool, f => f.Random.Bool())
            .RuleFor(house => house.InitialPrice, f => f.Random.Long(100000, 1000000))
            .RuleFor(house => house.IsDetached, f => f.Random.Bool())
            .RuleFor(house => house.LandFootage, f => f.Random.Number(50, 500))
            .RuleFor(house => house.Latitude, f => f.Address.Latitude())
            .RuleFor(house => house.Longitude, f => f.Address.Longitude())
            .RuleFor(house => house.Price, f => f.Random.Long(100000, 1000000))
            .RuleFor(house => house.ReservedAt, f => f.Date.Future())
            .RuleFor(house => house.RoomsCount, f => f.Random.Number(1, 5))
            .RuleFor(house => house.SoldAt, f => f.Date.Future())
            .RuleFor(house => house.Street, f => f.Address.StreetName())
            .RuleFor(house => house.StreetNumber, f => f.Random.Number())
            .RuleFor(house => house.AvailableFrom, f => DateOnly.FromDateTime(f.Date.Future()));
        var testHouses = houseFaker.Generate(20);

        context.Houses.AddRange(testHouses);
        context.SaveChanges();

    }
}
