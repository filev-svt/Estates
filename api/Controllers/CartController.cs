using api.Data;
using api.DTOs;
using api.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers;

public class CartController : BaseApiController
{
    private readonly StoreContext _context;

    public CartController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetCart")]
    public async Task<ActionResult<CartDto>> GetCart()
    {
        var cart = await RetrieveCart();

        return cart == null ? base.NotFound() : base.Ok(MapCartToDto(cart));
    }

    [HttpPost]
    public async Task<ActionResult<CartDto>> AddItemToCart(int productId, int quantity)
    {
        var cart = await RetrieveCart();

        cart ??= CreateCart();

        var product = await _context.Products.FindAsync(productId);

        if (product == null)
        {
            return NotFound();
        }

        cart.AddItem(product, quantity);

        if (await _context.SaveChangesAsync() == 0)
        {
            return BadRequest(new ProblemDetails { Title = "Problem adding item to cart" });
        }

        return CreatedAtRoute("GetCart", MapCartToDto(cart));
    }

    [HttpDelete]
    public async Task<ActionResult> RemoveItemFromCart(int productId, int quantity)
    {
        var cart = await RetrieveCart();

        if (cart == null)
        {
            return NotFound();
        }

        cart.RemoveItem(productId, quantity);

        if (await _context.SaveChangesAsync() == 0)
        {
            return BadRequest(new ProblemDetails { Title = "Problem removing item from cart" });
        }

        return NoContent();
    }

    private async Task<Cart?> RetrieveCart()
    {
        return await _context.Carts
            .Include(cart => cart.CartItems)
            .ThenInclude(item => item.Product)
            .FirstOrDefaultAsync(cart => cart.BuyerId == Request.Cookies["buyerId"]);
    }

    private Cart CreateCart()
    {
        var buyerId = Guid.NewGuid().ToString();
        var cookieOptions = new CookieOptions
        {
            IsEssential = true,
            Expires = DateTime.Now.AddDays(30)
        };

        Response.Cookies.Append("buyerId", buyerId, cookieOptions);

        var cart = new Cart { BuyerId = buyerId };
        _context.Carts.Add(cart);

        return cart;
    }

    private static CartDto MapCartToDto(Cart cart)
    {
        return new CartDto
        {
            Id = cart.Id,
            BuyerId = cart.BuyerId,
            Items = cart.CartItems.Select(item => new CartItemDto
            {
                ProductId = item.ProductId,
                ProductName = item.Product.Name,
                Price = item.Product.Price,
                Image = item.Product.Image,
                Quantity = item.Quantity
            }).ToList()
        };
    }
}
