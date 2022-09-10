namespace DeliveryAPI.Model.DTOs.ProdutoDTO
{
  public class CreateProdutoDTO
  {
    public string Titulo { get; set; }
    public double Valor { get; set; }
    public string Descricao { get; set; }
    public string Foto { get; set; }
    public string Categoria { get; set; }
  }
}
