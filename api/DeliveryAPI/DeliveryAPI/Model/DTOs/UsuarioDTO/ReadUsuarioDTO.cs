using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.DTOs.UsuarioDTO
{
  public class ReadUsuarioDTO
  {
    public int ID { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
  }
}
