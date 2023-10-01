using api.Data;
using api.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HousesController : ControllerBase
{
    private readonly StoreContext _context;
    public HousesController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<House>>> GetHouses()
    {
        return await _context.Houses.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<House?>> GetHouse(int id)
    {
        return await _context.Houses.FindAsync(id);
    }
}
