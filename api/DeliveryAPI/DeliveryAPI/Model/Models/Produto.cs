using System.ComponentModel.DataAnnotations;
using KeyAttribute = System.ComponentModel.DataAnnotations.KeyAttribute;

namespace DeliveryAPI.Model.Models
{
  public class Produto
  {
    [Key]
    public int ID { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Titulo { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public double Valor { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Descricao { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Foto { get; set; }
    [Required(ErrorMessage = "Campo obrigatório")]
    public string Categoria { get; set; }


  }
}
