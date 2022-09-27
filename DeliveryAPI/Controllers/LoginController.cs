using DeliveryAPI.Controllers.Services;
using DeliveryAPI.Model.Request;
using FluentResults;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

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
    public ActionResult Logar([FromBody] LoginRequest request)
    {
      var resultado = _service.Logar(request);
      if (string.IsNullOrEmpty(resultado))
      {
        return Unauthorized(resultado);
      }

      return Ok(new {Token = resultado});
    }

  }
}
