using Microsoft.IdentityModel.Tokens;

namespace DeliveryAPI.Model.Token
{
  public class JwtOptions
  {
    public string SecurityKey { get; set; }
    public string Issuer { get; set; }
    public string Audience { get; set; }
    public string Role { get; set; }
    public int Expiration { get; set; }
  }
}
