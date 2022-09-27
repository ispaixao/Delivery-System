using System;
using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.DTOs.CategoriaDTO
{
  public class UpdateCategoriaDTO
  {

    [Required(ErrorMessage = "Campo obrigatório")]
    public string Titulo { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string URL { get; set; }
  }
}
