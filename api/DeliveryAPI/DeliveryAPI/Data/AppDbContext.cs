using DeliveryAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace DeliveryAPI.Data
{
  public class AppDbContext : DbContext
  {

    public AppDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Produto> Produtos { get; set; }
    public DbSet<Categoria> Categorias { get; set; }
  }
}
