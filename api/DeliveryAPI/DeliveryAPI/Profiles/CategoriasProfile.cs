using AutoMapper;
using DeliveryAPI.Model;
using DeliveryAPI.Model.DTOs.CategoriaDTO;

namespace DeliveryAPI.Profiles
{
  public class CategoriasProfile : Profile
  {
    public CategoriasProfile()
    {
      CreateMap<CreateCategoriaDTO, Categoria>();
      CreateMap<Categoria, ReadCategoriaDTO>();
      CreateMap<UpdateCategoriaDTO, Categoria>();
    }
  }
}
