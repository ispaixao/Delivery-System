
using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.Models
{
  public class Usuario
  {
    [Key]
    public int ID { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Email { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string CPF { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Nome { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string DataNascimento { get; set; }

    public DateTime CriacaoCadastro = DateTime.Now;

    [Required(ErrorMessage = "Campo obrigatório")]
    public string Telefone { get; set; }

    [Required(ErrorMessage = "Campo obrigatório")]
    public string Cargo { get; set; }

  }
}
