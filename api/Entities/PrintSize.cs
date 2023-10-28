using Microsoft.EntityFrameworkCore;

namespace api.Entities;

[PrimaryKey(nameof(Width), nameof(Height))]
public class PrintSize
{
    public int Width { get; set; }
    public int Height { get; set; }
    public uint DefaultPrice { get; set; }
}