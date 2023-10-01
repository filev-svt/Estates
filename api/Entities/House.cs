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
    public int Footage { get; set; }
    public int LandFootage { get; set; }
    public int RoomsCount { get; set; }
    public int BathroomsCount { get; set; }
    public int FloorsCount { get; set; }
    public long InitialPrice { get; set; }
    public long Currency { get; set; }
    public long Price { get; set; }
    public bool IsDetached { get; set; }
    public bool HasPool { get; set; }
    public bool HasGarage { get; set; }
    public bool HasParking { get; set; }
    public bool HasBasement { get; set; }
    public byte EpcRating { get; set; }
    public DateOnly AvailableFrom { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? ReservedAt { get; set; }
    public DateTime? SoldAt { get; set; }
}
