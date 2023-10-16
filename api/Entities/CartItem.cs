using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities;

[Table("CartItems")]
public class CartItem
{
    // Columns
    public int Id { get; set; }
    public int Quantity { get; set; }
    public int ProductId { get; set; }
    public int CartId { get; set; }

    // Relationships
    public required Product Product { get; set; }
    public required Cart Cart { get; set; }
}
