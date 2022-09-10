using DeliveryAPI.Controllers.Services;
using DeliveryAPI.Model.DTOs.CategoriaDTO;
using FluentResults;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DeliveryAPI.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class CategoriaController : ControllerBase
  {
    private CategoriaService _service;

    public CategoriaController(CategoriaService service)
    {
      _service = service;
    }

    [HttpPost]
    public IActionResult CadastroCategoria(CreateCategoriaDTO dto)
    {
      ReadCategoriaDTO readCategoriaDTO =  _service.CadastroCategoria(dto);
      return CreatedAtAction(nameof(RecuperaCategoriaPorId), new { ID = readCategoriaDTO.ID }, readCategoriaDTO);
    }

    [HttpGet]
    public IActionResult RecuperaCategoria()
    {
      List<ReadCategoriaDTO> dto = _service.BuscaCategoria();
      if (dto == null) return NotFound();
      return Ok(dto);
    }

    [HttpGet("{id}")]
    public IActionResult RecuperaCategoriaPorId(int id)
    {
      ReadCategoriaDTO dto = _service.BuscaCategoriaPorId(id);
      if(dto == null) return NotFound();
      return Ok(dto);
    }

    [HttpPut("{id}")]
    public IActionResult AtualizaCategoria(int id, UpdateCategoriaDTO dto)
    {
      Result resultado = _service.AtualizaCategoria(id, dto);
      if (resultado.IsFailed) return BadRequest();
      return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeletaCategoria(int id)
    {
      Result resultado = _service.DeletaCategoria(id);
      if (resultado.IsFailed) return BadRequest();
      return NoContent();
    }

  }
}
