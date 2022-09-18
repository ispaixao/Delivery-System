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
      };

        
       var resultadoIdentity = _manager.CreateAsync(identity, dto.Password);
      
      
      if (resultadoIdentity.Result.Succeeded)
      {
          _manager.AddToRoleAsync(identity, "admin").Wait();
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

    public Result Atualizar(UpdateUsuarioDTO dto, int id)
    {
      var usuario = _manager.Users.FirstOrDefault(usuario => usuario.Id == id);
      if(usuario == null) return null;

      _mapper.Map(dto, usuario);
      _manager.UpdateAsync(usuario);
      _context.SaveChanges();
      return Result.Ok();
    }



  }
}
