using AutoMapper;
using DeliveryAPI.Model.DTOs.ProdutoDTO;
using DeliveryAPI.Model.Models;

namespace DeliveryAPI.Profiles
{
  public class ProdutosProfile : Profile
  {
    public ProdutosProfile()
    {
      CreateMap<CreateProdutoDTO, Produto>();
      CreateMap<Produto, ReadProdutoDTO>();
      CreateMap<UpdateProdutoDTO, Produto>();
    }
  }
}
