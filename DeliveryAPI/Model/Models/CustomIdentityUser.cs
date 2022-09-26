using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.Models
{
  public class CustomIdentityUser : IdentityUser<int>
  {
    public string CPF { get; set; }
    public string Nome { get; set; }
    public string DataNascimento { get; set; }
    public DateTime CriacaoCadastro = DateTime.Now;
    public string Telefone { get; set; }
    public string Cargo { get; set; }

  }
}
