using DeliveryAPI.Controllers.Services;
using DeliveryAPI.Model.Request;
using FluentResults;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DeliveryAPI.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class LoginController : ControllerBase
  {
    private LoginService _service;

    public LoginController(LoginService service)
    {
      _service = service;
    }

    [HttpPost]
    public IActionResult Logar([FromBody] LoginRequest request)
    {
      var resultado = _service.Logar(request);
      if (resultado.IsFailed)
      {
        return Unauthorized("Usuario não autorizado. Verifique as credenciais.");
      }

      return Ok();
    }



  }
}
