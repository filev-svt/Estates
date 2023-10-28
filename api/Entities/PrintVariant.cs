using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace api.Entities;

[Index(nameof(ProductId), nameof(Width), nameof(Height), IsUnique = true)]
public class PrintVariant : ProductVariant
{
    // Columns
    [ForeignKey(nameof(PrintSize))]
    public int Width { get; set; }
    public int Height { get; set; }

    // Relationships
    public PrintSize PrintSize { get; set; } = null!;
}