namespace api.Entities;

public class House
{
    public int Id { get; set; }
    public required string Description { get; set; }
    public required string CountryCode { get; set; }
    public required string City { get; set; }
    public string? Street { get; set; }
    public int? StreetNumber { get; set; }
    public double? Latitude { get; set; }
    public double? Longitude { get; set; }
    public int LandArea { get; set; }
    public int FloorArea { get; set; }
    public int InternalArea { get; set; }
    public int RoomsCount { get; set; }
    public int BathroomsCount { get; set; }
    public int FloorsCount { get; set; }
    public int ParkingSpacesCount { get; set; }
    public int GarageSpacesCount { get; set; }
    public required string Currency { get; set; }
    public long InitialPrice { get; set; }
    public long Price { get; set; }
    public long? Commission { get; set; }
    public bool IsDetached { get; set; }
    public bool HasFurniture { get; set; }
    public bool HasTerrace { get; set; }
    public bool HasBalcony { get; set; }
    public bool HasPool { get; set; }
    public bool HasBasement { get; set; }
    public bool HasRefrigerator { get; set; }
    public bool HasOven { get; set; }
    public bool HasAirConditioning { get; set; }
    public bool HasDishwasher { get; set; }
    public bool HasWashingMachine { get; set; }
    public byte? EpcRating { get; set; }
    public int? YearBuilt { get; set; }
    public DateOnly AvailableFrom { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? ReservedAt { get; set; }
    public DateTime? SoldAt { get; set; }
}
