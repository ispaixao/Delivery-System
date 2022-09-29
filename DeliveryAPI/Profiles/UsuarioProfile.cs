using AutoMapper;
using DeliveryAPI.Model.DTOs.UsuarioDTO;
using DeliveryAPI.Model.Models;
using Microsoft.AspNetCore.Identity;

namespace DeliveryAPI.Profiles
{
  public class UsuarioProfile : Profile
  {
      public UsuarioProfile()
    {
      CreateMap<CreateUsuarioDTO, Usuario>();
      CreateMap<Usuario, CustomIdentityUser>();
      CreateMap<UpdateUsuarioDTO, CustomIdentityUser>();
      CreateMap<CustomIdentityUser, ReadUsuarioDTO>();
      CreateMap<UpdateUsuarioDTO, Usuario>();
    }
  }
}
