using DeliveryAPI.Model.Request;
using FluentResults;
using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption.ConfigurationModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace DeliveryAPI.Controllers.Services
{
  public class LoginService
  {

    private SignInManager<IdentityUser<int>> _signInManager;
    private UserManager<IdentityUser<int>> _userManager;

    public LoginService(SignInManager<IdentityUser<int>> signInManager, UserManager<IdentityUser<int>> userManager)
    {
      this._signInManager = signInManager;
      _userManager = userManager;
    }

    
    public Result Logar(LoginRequest request)
    {
      var autenticar =  _signInManager.PasswordSignInAsync(request.Usuario, request.Senha, false, false);

      if (autenticar.Result.Succeeded)
      {
        var identity = _signInManager.
          UserManager.
          Users.
          FirstOrDefault(usuario => usuario.UserName == request.Usuario.ToUpper());
        return Result.Ok();
      }

      return Result.Fail("F.");

    }



  }
}
