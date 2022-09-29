using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.DTOs.UsuarioDTO
{
  public class ReadUsuarioDTO
  {
    public int ID { get; set; }
    public string Email { get; set; }
    public string CPF { get; set; }
    public string Telefone { get; set; }
    public string Cargo { get; set; }

    public string Nome { get; set; } 
    public DateTime DataNascimento { get; set; } 
    public DateTime CriacaoCadastro { get; set; }
  }
}
