using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Data;

public class StoreContext : DbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Cart> Carts { get; set; }

    public StoreContext(DbContextOptions options) : base(options)
    {
    }

}
