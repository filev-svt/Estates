namespace api.Entities;

public class Cart
{
    // Columns
    public int Id { get; set; }
    public required string BuyerId { get; set; }

    // Relationships
    public List<CartItem> CartItems { get; set; } = new();

    // Methods
    public void AddItem(Product product, int quantity)
    {
        if (CartItems.All(item => item.ProductId != product.Id))
        {
            CartItems.Add(new CartItem
            {
                Cart = this,
                Product = product,
                Quantity = quantity
            });
        }

        var existingItem = CartItems.FirstOrDefault(item => item.ProductId == product.Id);

        if (existingItem != null)
        {
            existingItem.Quantity += quantity;
        }

    }

    public void RemoveItem(int productId, int quantity)
    {
        var item = CartItems.FirstOrDefault(item => item.ProductId == productId);

        if (item == null)
        {
            return;
        }

        item.Quantity -= quantity;

        if (item.Quantity <= 0)
        {
            CartItems.Remove(item);
        }
    }
}