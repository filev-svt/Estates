namespace api.Entities;

public class ProductVariant
{
    // Columns
    public int Id { get; set; }
    public int ProductId { get; set; }
    public uint Price { get; set; }

    // Relationships
    public Product Product { get; set; } = null!;
}