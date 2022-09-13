using AutoMapper;
using DeliveryAPI.Data;
using DeliveryAPI.Model.DTOs.UsuarioDTO;
using DeliveryAPI.Model.Models;
using FluentResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Runtime.InteropServices;

namespace DeliveryAPI.Controllers.Services
{
  public class UsuarioService
  {

    private IMapper _mapper;
    private UserManager<IdentityUser<int>> _manager;
    private UserDbContext _context;

    public UsuarioService(IMapper mapper, UserManager<IdentityUser<int>> manager, UserDbContext context)
    {
      _mapper = mapper;
      _manager = manager;
      _context = context;
    }


    public Result Cadastro(CreateUsuarioDTO dto)
    {
      var usuario = _mapper.Map<Usuario>(dto);
      var identityUser = _mapper.Map<IdentityUser<int>>(usuario);
      var resultadoIdentity = _manager.CreateAsync(identityUser, dto.Password);

      if (resultadoIdentity.Result.Succeeded)
      {
        return Result.Ok();
      }

      return Result.Fail("Erro inesperado");

    }

    public List<IdentityUser<int>> Buscar()
    {
      List<IdentityUser<int>> identity;
      identity = _manager.Users.ToList();

      if (identity == null) return null;

      List<IdentityUser<int>> usuarios = _mapper.Map< List<IdentityUser<int>>> (identity);
      return usuarios;
    }

    public Result Atualizar(UpdateUsuarioDTO dto, int id)
    {
      var usuario = _context.Usuarios.FirstOrDefault(usuario => usuario.ID == id);
      if(usuario == null) return null;

      _mapper.Map(dto, usuario);
      _context.Usuarios.Update(usuario);
      _context.SaveChanges();
      return Result.Ok();
    }



  }
}
