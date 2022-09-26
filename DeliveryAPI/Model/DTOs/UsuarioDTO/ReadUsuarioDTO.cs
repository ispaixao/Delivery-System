using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.DTOs.UsuarioDTO
{
  public class ReadUsuarioDTO
  {
    public int ID { get; }
    public string Email { get; }
    public string CPF { get; }
    public string Nome { get; } 
    public DateTime DataNascimento { get; } 
    public DateTime CriacaoCadastro { get; }
  }
}
