using AutoMapper;
using DeliveryAPI.Model;
using DeliveryAPI.Model.DTOs.ProdutoDTO;

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
