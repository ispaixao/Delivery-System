using DeliveryAPI.Model.Token;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using System.Data;
using Castle.DynamicProxy.Contributors;
using Newtonsoft.Json.Linq;
using DeliveryAPI.Model.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace DeliveryAPI.Controllers.Services
{
  public class TokenService
  {

    private readonly UserManager<CustomIdentityUser> _userManager;
    private readonly JwtOptions _jwtOptions;

    public TokenService(UserManager<CustomIdentityUser> userManager, IOptions<JwtOptions> jwtOptions)
    {
      _userManager = userManager;
      _jwtOptions = jwtOptions.Value;
    }

    public string GerarToken(CustomIdentityUser user, string role)
    {

      Claim[] claimsUser = new Claim[]
      {
        new Claim(ClaimTypes.Email, user.UserName),
        new Claim(ClaimTypes.Role, role),
        new Claim(ClaimTypes.DateOfBirth, user.DataNascimento.ToString()),
      };
      var usuario = _userManager.FindByEmailAsync(user.Email);
      if (usuario == null) return null;
      var key = Encoding.ASCII.GetBytes(_jwtOptions.SecurityKey);
      var credenciais = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature);

      var tokenDescripton = new JwtSecurityToken
      (
        claims: claimsUser,
        signingCredentials: credenciais,
        issuer: _jwtOptions.Issuer,
        audience: _jwtOptions.Audience,
        expires: DateTime.UtcNow.AddSeconds(_jwtOptions.Expiration)
      );

      var token = new JwtSecurityTokenHandler().WriteToken(tokenDescripton);
      return token;


    }
  }
}
