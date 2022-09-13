using AutoMapper;
using DeliveryAPI.Model.DTOs.CategoriaDTO;
using DeliveryAPI.Model.Models;

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
