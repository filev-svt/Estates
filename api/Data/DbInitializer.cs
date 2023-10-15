using api.Entities;
using Bogus;

namespace api.Data;

public static class DbInitializer
{
    public static void Initialize(StoreContext context)
    {
        context.Database.EnsureCreated();

        if (context.Products.Any())
        {
            return;
        }

        var productFaker = new Faker<Product>()
            .RuleFor(product => product.Name, f => f.Commerce.ProductName())
            .RuleFor(product => product.Description, f => f.Commerce.ProductDescription())
            .RuleFor(product => product.Image, f => f.Image.PicsumUrl())
            .RuleFor(product => product.Price, f => f.Random.UInt(1000, 10000));

        var testproducts = productFaker.Generate(20);

        context.Products.AddRange(testproducts);
        context.SaveChanges();

    }
}
