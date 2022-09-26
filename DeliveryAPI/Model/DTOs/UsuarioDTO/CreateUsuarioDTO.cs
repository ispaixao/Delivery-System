using Microsoft.AspNetCore.Components.Forms;
using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.DTOs.UsuarioDTO
{
  public class CreateUsuarioDTO
  {
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Nome { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Campo obrigatório")]
    public string Telefone { get; set; }


    [Required(ErrorMessage = "Campo obrigatório")]
    public string CPF { get; set; }

    [Required(ErrorMessage = "Campo obrigatório"), DataType(DataType.Date)]
    public string DataNascimento { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]

    public DateTime CriacaoCadastro = DateTime.Now;
    [Required, DataType(DataType.Password)]
    public string Senha { get; set; }
    [Compare("Senha"), Required]
    public string ConfirmSenha { get; set; }

    [Required(ErrorMessage = "Campo obrigatório")]
    public string Cargo { get; set; }

  }
}
