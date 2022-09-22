using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DeliveryAPI.Model.Request
{
  public class LoginRequest
  {
    [Required(ErrorMessage = "Campo {0} não pode ser nulo.")]
    public string Email { get; set; }
    [Required(ErrorMessage = "Campo {0} não pode ser nulo.")]
    public string Senha { get; set; }
  }
}
