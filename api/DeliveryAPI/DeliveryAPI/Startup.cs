using DeliveryAPI.Controllers.Services;
using DeliveryAPI.Data;
using DeliveryAPI.Model.Models;
using DeliveryAPI.Model.Token;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using System;
using System.Text;

namespace DeliveryAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(opts => opts.UseSqlServer(Configuration.GetConnectionString("StringConnection")));
            services.AddDbContext<UserDbContext>(opts => opts.UseSqlServer(Configuration.GetConnectionString("StringConnection")));
            services.AddIdentity<CustomIdentityUser, IdentityRole<int>>(opts =>
                {

                })
                .AddEntityFrameworkStores<UserDbContext>()
                .AddDefaultTokenProviders();

      // CONFIGS JWT

      var appSettingsSection = Configuration.GetSection("JwtOptions");
          services.Configure<JwtOptions>(appSettingsSection);

          var jwtOptions = appSettingsSection.Get<JwtOptions>();
          var key = Encoding.ASCII.GetBytes(jwtOptions.SecurityKey);



          services.AddAuthentication(opts =>
          {
              
              opts.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
              opts.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
          }).AddJwtBearer(token =>
            {
                token.RequireHttpsMetadata = true;
                token.SaveToken = true;
                token.TokenValidationParameters = new TokenValidationParameters
                {
                  ValidateIssuerSigningKey = true,
                  IssuerSigningKey = new SymmetricSecurityKey(key),
                  ValidateIssuer = true,
                  ValidateAudience = true,
                  ValidAudience = jwtOptions.Audience,
                  ValidIssuer = jwtOptions.Issuer
                };
            });
          services.AddControllers();
          services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "DeliveryAPI", Version = "v1" });
            });

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            /* SERVICES PRODUTO, CATEGORIA */
            services.AddScoped<ProdutoService, ProdutoService>();
            services.AddScoped<CategoriaService, CategoriaService>();
            services.AddScoped<UsuarioService, UsuarioService>();
            services.AddScoped<LoginService, LoginService>();
            services.AddScoped<TokenService, TokenService>();



      services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(opts => opts.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader());
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "DeliveryAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
