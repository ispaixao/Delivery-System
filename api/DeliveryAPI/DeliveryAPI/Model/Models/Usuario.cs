
using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.Models
{
  public class Usuario
  {
    [Key]
    public int ID { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Username { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Email { get; set; }
  }
}
