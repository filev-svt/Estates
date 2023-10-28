using System.ComponentModel.DataAnnotations;

namespace api.Entities;

public class BookCover
{
    [Key]
    public required string Type { get; set; }
}