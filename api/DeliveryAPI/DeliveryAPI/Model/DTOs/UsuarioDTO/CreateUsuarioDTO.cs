using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.DTOs.UsuarioDTO
{
  public class CreateUsuarioDTO
  {
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Username { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Email { get; set; }
    [Required, DataType(DataType.Password)]
    public string Password { get; set; }
    [Compare("Password"), Required]
    public string RePassword { get; set; }
  }
}
