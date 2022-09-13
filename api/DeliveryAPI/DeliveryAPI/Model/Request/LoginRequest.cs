using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DeliveryAPI.Model.Request
{
  public class LoginRequest
  {
    public string Usuario { get; set; }
    public string Senha { get; set; }
  }
}
