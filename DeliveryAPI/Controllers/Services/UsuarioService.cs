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
    private UserManager<CustomIdentityUser> _manager;
    private UserDbContext _context;

    public UsuarioService(IMapper mapper, UserManager<CustomIdentityUser> manager,  UserDbContext context)
    {
      _mapper = mapper;
      _manager = manager;
      _context = context;
    }


    public Result Cadastro(CreateUsuarioDTO dto)
    {
      var identity = new CustomIdentityUser
      {
        UserName = dto.Email,
        Email = dto.Email,
        EmailConfirmed = true,
        CPF = dto.CPF,
        DataNascimento = dto.DataNascimento,
        LockoutEnabled = false,
        Nome = dto.Nome,
        Telefone = dto.Telefone,
        PhoneNumberConfirmed = true,
        Cargo = dto.Cargo,
      };

        
       var resultadoIdentity = _manager.CreateAsync(identity, dto.Senha);
      
      
      if (resultadoIdentity.Result.Succeeded)
      {
          _manager.AddToRoleAsync(identity, identity.Cargo).Wait();
          return Result.Ok();
      }

      return Result.Fail("Erro inesperado");

    }

    public List<CustomIdentityUser> Buscar()
    {
      List<CustomIdentityUser> identity;
      identity = _manager.Users.ToList();

      if (identity == null) return null;

      List<CustomIdentityUser> usuarios = _mapper.Map<List<CustomIdentityUser>> (identity);
      return usuarios;
    }

    public ReadUsuarioDTO BuscarPorId(int id)
    {
      var usuario = _manager.Users.FirstOrDefault(usuario => usuario.Id == id);
      ReadUsuarioDTO dto = _mapper.Map<ReadUsuarioDTO>(usuario);
      if (usuario == null) return null;


      return _mapper.Map<ReadUsuarioDTO>(dto);
    }

    public Result Atualizar(UpdateUsuarioDTO dto, int id)
    {
      var usuario = _manager.Users.FirstOrDefault(usuario => usuario.Id == id);
      if(usuario == null) return null;

      _mapper.Map(dto, usuario);
      _manager.UpdateAsync(usuario);
      return Result.Ok();
    }


    public Result Deletar(int id)
    {
      var usuario = _manager.Users.FirstOrDefault(usuario => usuario.Id == id);
      if (usuario == null) return null;

      _manager.DeleteAsync(usuario);
      return Result.Ok();
    }


  }
}
