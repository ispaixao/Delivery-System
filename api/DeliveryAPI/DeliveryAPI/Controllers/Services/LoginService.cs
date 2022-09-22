using DeliveryAPI.Model.Models;
using DeliveryAPI.Model.Request;
using DeliveryAPI.Model.Token;
using FluentResults;
using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption.ConfigurationModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DeliveryAPI.Controllers.Services
{
  public class LoginService
  {

    private readonly SignInManager<CustomIdentityUser> _signInManager;
    private readonly TokenService _tokenService;
    public LoginService(SignInManager<CustomIdentityUser> signInManager, TokenService tokenService)
    {
      _signInManager = signInManager;
      _tokenService = tokenService;
    }


    public String Logar(LoginRequest request)
    {
      var autenticar =  _signInManager.PasswordSignInAsync(request.Email, request.Senha, false, false);



      if (autenticar.Result.Succeeded)
      {
        var identity = _signInManager.
          UserManager.
          Users.
          FirstOrDefault(usuario => usuario.Email == request.Email.ToUpper());

        var token = _tokenService.GerarToken(identity, _signInManager.UserManager
                  .GetRolesAsync(identity).Result.FirstOrDefault());
        return token;

      }

      return "";

    }

  }
}
