using AutoMapper;
using DeliveryAPI.Data;
using DeliveryAPI.Model.DTOs.CategoriaDTO;
using DeliveryAPI.Model.Models;
using FluentResults;
using System.Collections.Generic;
using System.Linq;

namespace DeliveryAPI.Controllers.Services
{
  public class CategoriaService
  {
    private IMapper _mapper;
    private AppDbContext _context;

    public CategoriaService(IMapper mapper, AppDbContext context)
    {
      _mapper = mapper;
      _context = context;
    }

    public ReadCategoriaDTO CadastroCategoria(CreateCategoriaDTO dto)
    {
      var categoria = _mapper.Map<Categoria>(dto);
      _context.Categorias.Add(categoria);
      _context.SaveChanges();
      return _mapper.Map<ReadCategoriaDTO>(categoria);
    }

    public List<ReadCategoriaDTO> BuscaCategoria()
    {
      List<Categoria> categorias;
      categorias = _context.Categorias.ToList();
      if (categorias == null)
      {
        return null;
      }

      List<ReadCategoriaDTO> dto = _mapper.Map<List<ReadCategoriaDTO>>(categorias);
      return dto;
    }

    public ReadCategoriaDTO BuscaCategoriaPorId(int id)
    {
      var categoria = _context.Categorias.FirstOrDefault(categoria => categoria.ID == id);
      if (categoria == null)
      {
        return null;
      }

      return _mapper.Map<ReadCategoriaDTO>(categoria);
    }

    public Result AtualizaCategoria(int id, UpdateCategoriaDTO dto)
    {
      var categoria = _context.Categorias.FirstOrDefault(categoria => categoria.ID == id);
      if (categoria == null)
      {
        return Result.Fail("Categoria não encontrada");
      }
      _mapper.Map(dto, categoria);
      _context.Categorias.Update(categoria);
      _context.SaveChanges();
      return Result.Ok();

    }

    public Result DeletaCategoria(int id)
    {
      var categoria = _context.Categorias.FirstOrDefault(categoria => categoria.ID == id);
      if (categoria == null)
      {
        return Result.Fail("Categoria não encontrada");
      }

      _context.Categorias.Remove(categoria);
      _context.SaveChanges();
      return Result.Ok();
    }


  }
}
