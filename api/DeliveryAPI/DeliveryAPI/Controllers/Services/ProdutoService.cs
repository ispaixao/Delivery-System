using AutoMapper;
using DeliveryAPI.Data;
using DeliveryAPI.Model.DTOs.ProdutoDTO;
using DeliveryAPI.Model.Models;
using FluentResults;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace DeliveryAPI.Controllers.Services
{
  public class ProdutoService
  {

    IMapper _mapper;
    AppDbContext _context;


    public ProdutoService(AppDbContext context, IMapper mapper)
    {
      _context = context;
      _mapper = mapper;
    }

    public ReadProdutoDTO CadastroProduto(CreateProdutoDTO dto)
    {
      var produto = _mapper.Map<Produto>(dto);
      _context.Produtos.Add(produto);
      _context.SaveChanges();
      return _mapper.Map<ReadProdutoDTO>(produto);
    }

    public List<ReadProdutoDTO> RecuperaProduto()
    {
      List<Produto> produtos;
      produtos = _context.Produtos.ToList();
      if (produtos == null)
      {
        return null;
      }

      List<ReadProdutoDTO> dto = _mapper.Map<List<ReadProdutoDTO>>(produtos);
      return dto;

    }

    public List<ReadProdutoDTO> RecuperaProdutoPorCategoria(string categoria)
    {
      List<Produto> produtos = _context.Produtos.Where(produto => produto.Categoria == categoria).ToList();
      List<ReadProdutoDTO> dto = _mapper.Map<List<ReadProdutoDTO>>(produtos);

      if (produtos == null) return null;

      return dto;
    }


    public ReadProdutoDTO RecuperaProdutoPorID(int id)
    {
      var produto = _context.Produtos.FirstOrDefault(produto => produto.ID == id);
      ReadProdutoDTO dto = _mapper.Map<ReadProdutoDTO>(produto);
      if (produto == null)
      {
        return null;
      }

      return _mapper.Map<ReadProdutoDTO>(dto);
    }

    public Result AtualizaProduto(int id, UpdateProdutoDTO dto)
    {
      var produto = _context.Produtos.FirstOrDefault(produto => produto.ID == id);
      if (produto == null)
      {
        return Result.Fail("Não encontrado.");
      }
      _mapper.Map(dto, produto);
      _context.Produtos.Update(produto);
      _context.SaveChanges();
      return Result.Ok();
    }

    public Result DeletaProduto(int id)
    {
      var produto = _context.Produtos.FirstOrDefault(produto => produto.ID == id);
      if (produto == null)
      {
        return Result.Fail("Produto não encontrado");
      }

      _context.Produtos.Remove(produto);
      _context.SaveChanges();
      return Result.Ok();
    }
  }
}
