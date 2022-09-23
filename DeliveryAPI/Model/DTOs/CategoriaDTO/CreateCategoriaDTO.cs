using System.ComponentModel.DataAnnotations;

namespace DeliveryAPI.Model.DTOs.CategoriaDTO
{
    public class CreateCategoriaDTO
    {

        [Required(ErrorMessage = "Campo obrigatório")]
        public string Titulo { get; set; }
        [Required(ErrorMessage = "Campo obrigatório")]
        public string Foto { get; set; }
    }
}
