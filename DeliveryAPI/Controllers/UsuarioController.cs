using DeliveryAPI.Controllers.Services;
using DeliveryAPI.Model.DTOs.UsuarioDTO;
using DeliveryAPI.Model.Models;
using FluentResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DeliveryAPI_Users.Controllers
{
  [ApiController]
  [Route("usuarios")]
  public class UsuarioController : ControllerBase
  {
    private UsuarioService _service;

    public UsuarioController(UsuarioService service)
    {
      _service = service;
    }

    [HttpPost, Route("cadastrar")]
    public IActionResult Cadastro(CreateUsuarioDTO dto)
    {
      Result resultado = _service.Cadastro(dto);
      if (resultado.IsFailed) return StatusCode(500);
      return Ok(resultado);
    }

    [HttpGet, Route("listar")]
    public IActionResult Buscar()
    {
      List<CustomIdentityUser> usuarios = _service.Buscar();
      if (usuarios == null) return NotFound();
      return Ok(usuarios);
    }

    [HttpPut]
    public IActionResult Atualizar([FromBody] UpdateUsuarioDTO dto, int id)
    {
      var usuario = _service.Atualizar(dto, id);
      if (usuario == null) return NotFound();
      return NoContent();
    }




  }
}
