namespace api.DTOs;

public class CartItemDto
{
    public int ProductVariantId { get; set; }
    public required string ProductName { get; set; }
    public uint Price { get; set; }
    public required string Image { get; set; }
    public int Quantity { get; set; }
}
