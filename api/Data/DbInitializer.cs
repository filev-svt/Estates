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
            .RuleFor(house => house.Street, f => f.Address.StreetName())
            .RuleFor(house => house.StreetNumber, f => f.Random.Number())
            .RuleFor(house => house.CreatedAt, f => f.Date.Past())
            .RuleFor(house => house.Currency, f => f.PickRandom("CZK", "EUR"))
            .RuleFor(house => house.Description, f => f.Lorem.Paragraph())
            .RuleFor(house => house.FloorsCount, f => f.Random.Number(1, 3))
            .RuleFor(house => house.GarageSpacesCount, f => f.Random.Number(0, 2))
            .RuleFor(house => house.ParkingSpacesCount, f => f.Random.Number(0, 4))
            .RuleFor(house => house.LandArea, f => f.Random.Number(500, 3000))
            .RuleFor(house => house.FloorArea, (f, house) => Math.Round(house.LandArea * 0.4))
            .RuleFor(house => house.InternalArea, (f, house) => Math.Round(house.FloorArea * 0.95))

            .RuleFor(house => house.Latitude, f => f.Address.Latitude())
            .RuleFor(house => house.Longitude, f => f.Address.Longitude())
            .RuleFor(house => house.InitialPrice, f => f.Random.Long(5000000, 15000000))
            .RuleFor(house => house.Price, (f, house) =>
            {
                if (f.Random.Bool())
                {
                    return house.InitialPrice * 0.8;
                }

                return house.InitialPrice;
            })
            .RuleFor(house => house.Commission, (f, house) =>
            {
                if (f.Random.Bool())
                {
                    return (long)(house.InitialPrice * 0.05);
                }

                return null;
            })
            .RuleFor(house => house.IsDetached, f => f.Random.Bool())
            .RuleFor(house => house.HasFurniture, f => f.Random.Bool())
            .RuleFor(house => house.HasTerrace, f => f.Random.Bool())
            .RuleFor(house => house.HasBalcony, f => f.Random.Bool())
            .RuleFor(house => house.HasPool, f => f.Random.Bool())
            .RuleFor(house => house.HasBasement, f => f.Random.Bool())
            .RuleFor(house => house.HasRefrigerator, f => f.Random.Bool())
            .RuleFor(house => house.HasOven, f => f.Random.Bool())
            .RuleFor(house => house.HasAirConditioning, f => f.Random.Bool())
            .RuleFor(house => house.HasDishwasher, f => f.Random.Bool())
            .RuleFor(house => house.HasWashingMachine, f => f.Random.Bool())
            .RuleFor(house => house.YearBuilt, f => f.Date.Past().Year)
            .RuleFor(house => house.EpcRating, f => f.Random.Byte(1, 100))

            .RuleFor(house => house.RoomsCount, f => f.Random.Number(2, 8))
            .RuleFor(house => house.BathroomsCount, f => f.Random.Number(1, 2))
            .RuleFor(house => house.ReservedAt, (f, house) =>
            {
                if (f.Random.Bool())
                {
                    return f.Date.Past();
                }

                return null;
            })
            .RuleFor(house => house.SoldAt, (f, house) =>
            {
                if (house.ReservedAt != null && f.Random.Bool())
                {
                    return f.Date.Past();
                }

                return null;
            })
            .RuleFor(house => house.AvailableFrom, f => DateOnly.FromDateTime(f.Date.Future()));


        var testHouses = houseFaker.Generate(20);

        context.Houses.AddRange(testHouses);
        context.SaveChanges();

    }
}
