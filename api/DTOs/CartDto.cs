namespace api.DTOs;

public class CartDto
{
    public int Id { get; set; }
    public required string BuyerId { get; set; }
    public List<CartItemDto> Items { get; set; } = new();
}
