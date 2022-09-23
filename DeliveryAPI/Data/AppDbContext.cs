using DeliveryAPI.Model.Models;
using Microsoft.EntityFrameworkCore;

namespace DeliveryAPI.Data
{
  public class AppDbContext : DbContext
  {

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Produto> Produtos { get; set; }
    public DbSet<Categoria> Categorias { get; set; }
  }
}
