using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Data;

public class StoreContext : DbContext
{
    public DbSet<House> Houses { get; set; }

    public StoreContext(DbContextOptions options) : base(options)
    {
    }

}
