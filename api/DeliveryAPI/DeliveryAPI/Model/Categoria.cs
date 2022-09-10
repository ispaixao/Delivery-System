using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model
{
    public class Categoria
    {
        [Key]
        public int ID { get; set; }
        [Required(ErrorMessage = "Campo obrigatório")]
        public string Titulo { get; set; }
        [Required(ErrorMessage = "Campo obrigatório")]
        public string Foto { get; set; }
    }
}
