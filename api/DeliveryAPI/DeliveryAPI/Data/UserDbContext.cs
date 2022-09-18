using DeliveryAPI.Model.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace DeliveryAPI.Data
{
  public class UserDbContext : IdentityDbContext<CustomIdentityUser, IdentityRole<int>, int>
  {

    private IConfiguration _configuration;

    public UserDbContext(DbContextOptions<UserDbContext> opt, IConfiguration configuration) : base(opt)
    {
      _configuration = configuration;
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);

      builder.Entity<IdentityRole<int>>().HasData(
        new IdentityRole<int> { Id = 1, Name = "regular", NormalizedName = "REGULAR", });

      builder.Entity<IdentityRole<int>>().HasData(
        new IdentityRole<int> { Id = 2, Name = "admin", NormalizedName = "ADMIN" }
        );
    }



  }
}
