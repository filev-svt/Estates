using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Data;

public class StoreContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    public StoreContext(DbContextOptions options) : base(options)
    {
    }

}
