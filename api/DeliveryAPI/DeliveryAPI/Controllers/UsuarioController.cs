using DeliveryAPI.Controllers.Services;
using DeliveryAPI.Model.DTOs.UsuarioDTO;
using FluentResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DeliveryAPI_Users.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class UsuarioController : ControllerBase
  {
    private UsuarioService _service;

    public UsuarioController(UsuarioService service)
    {
      _service = service;
    }

    [HttpPost]
    public IActionResult Cadastro([FromBody] CreateUsuarioDTO dto)
    {
      Result resultado = _service.Cadastro(dto);
      if (resultado.IsFailed) return StatusCode(500);
      return Ok(resultado.WithSuccess("Criado com sucesso"));
    }

    [HttpGet]
    public IActionResult Buscar()
    {
      List<IdentityUser<int>> identity = _service.Buscar();
      if (identity == null) return NotFound();
      return Ok(identity);
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
