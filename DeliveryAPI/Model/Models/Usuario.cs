
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
    public DateTime DataNascimento { get; set; }

    [Required(ErrorMessage = "Campo obrigatório")]

    public DateTime CriacaoCadastro = DateTime.Now;
  }
}
