using DeliveryAPI.Controllers.Services;
using DeliveryAPI.Model.DTOs.ProdutoDTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DeliveryAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProdutoController : ControllerBase
    {
        private ProdutoService _service;

        public ProdutoController(ProdutoService service)
        {
            _service = service;
        }

        [Authorize(Roles = "admin")]
        [HttpPost]
        public IActionResult CadastroProduto([FromBody] CreateProdutoDTO dto)
        {
            ReadProdutoDTO readProdutoDTO = _service.CadastroProduto(dto);
            return CreatedAtAction(nameof(RecuperaProdutoPorId), new { ID = readProdutoDTO.ID }, readProdutoDTO);
        }


        [HttpGet]
        public IActionResult RecuperaProdutos()
        {
            List<ReadProdutoDTO> dto = _service.RecuperaProduto();

            if (dto == null)
            {
                return BadRequest();
            }

            return Ok(dto);


        }

        [HttpGet("categoria={param}")]
        public IActionResult RecuperaProdutoPorCategoria([FromRoute] string param)
        {
          List<ReadProdutoDTO> dto = _service.RecuperaProdutoPorCategoria(param);
          if (dto == null) return NotFound();
           return Ok(dto);
        
        }


        [HttpGet("id/{id}")]
        public IActionResult RecuperaProdutoPorId(int id)
        {
            ReadProdutoDTO readProdutoDTO = _service.RecuperaProdutoPorID(id);
            if (readProdutoDTO == null)
            {
                return NotFound();
            }

            return Ok(readProdutoDTO);
        }

        [HttpPut("{id}")]
        public IActionResult AtualizaProduto(int id, [FromBody] UpdateProdutoDTO dto)
        {
            var resultado = _service.AtualizaProduto(id, dto);
            if (resultado.IsFailed)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletaProduto(int id)
        {
            var produto = _service.DeletaProduto(id);
            if (produto.IsFailed)
            {
                return NotFound();
            }

            return NoContent();
        }

    }
}
