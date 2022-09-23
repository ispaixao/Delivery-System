using Microsoft.AspNetCore.Identity;
using System;

namespace DeliveryAPI.Model.Models
{
  public class CustomIdentityUser : IdentityUser<int>
  {
    public string CPF { get; set; }
    public DateTime DataNascimento { get; set; }
    public DateTime CriacaoCadastro = DateTime.Now;
  
  }
}
