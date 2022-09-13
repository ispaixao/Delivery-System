using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.DTOs.UsuarioDTO
{
  public class UpdateUsuarioDTO
  {

    [Required(ErrorMessage = "Campo obrigatório")]
    public string Email { get; set; }
  }
}
