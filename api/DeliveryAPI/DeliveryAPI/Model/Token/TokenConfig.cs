using Microsoft.IdentityModel.Tokens;

namespace DeliveryAPI.Model.Token
{
  public class TokenConfig
  {
    public string Issuer { get; set; }
    public string Audience { get; set; }
    public SigningCredentials Credenciais { get; set; }
    public int Expiracao { get; set; }
  }
}
