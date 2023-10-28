using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace api.Entities;

[Index(nameof(ProductId), nameof(BookCoverType), IsUnique = true)]
public class PhotobookVariant : ProductVariant
{
    // Columns
    public ushort PageCount { get; set; }
    [ForeignKey(nameof(BookCover))]
    public required string BookCoverType { get; set; }

    // Relationships
    public BookCover BookCover { get; set; } = null!;
}