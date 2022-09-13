using DeliveryAPI.Model.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace DeliveryAPI.Data
{
  public class UserDbContext : IdentityDbContext<IdentityUser<int>, IdentityRole<int>, int>
  {
    private IConfiguration _configuration;

    public UserDbContext(DbContextOptions<UserDbContext> opt, IConfiguration configuration) : base(opt)
    {
      _configuration = configuration;
    }


    public DbSet<Usuario> Usuarios { get; }



  }
}
