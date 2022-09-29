using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.DTOs.UsuarioDTO
{
  public class UpdateUsuarioDTO
  {

    [Required(ErrorMessage = "Campo obrigatório")]
    public string Email { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string CPF { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Cargo { get; set; }

    [Required(ErrorMessage = "Campo obrigatório")]
    public string Nome { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Telefone { get; set; }

    [Required(ErrorMessage = "Campo obrigatório")]
    public DateTime DataNascimento { get; set; }
  }

}

