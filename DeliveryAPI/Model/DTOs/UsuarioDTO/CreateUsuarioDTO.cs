using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.DTOs.UsuarioDTO
{
  public class CreateUsuarioDTO
  {
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Email { get; set; }
    public string CPF { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public DateTime DataNascimento { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]

    public DateTime CriacaoCadastro = DateTime.Now;
    [Required, DataType(DataType.Password)]
    public string Password { get; set; }
    [Compare("Password"), Required]
    public string RePassword { get; set; }
  }
}
