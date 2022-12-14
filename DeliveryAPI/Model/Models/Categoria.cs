using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.Models
{
  public class Categoria
  {
    [Key]
    public int ID { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Titulo { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string URL { get; set; }
  }
}
