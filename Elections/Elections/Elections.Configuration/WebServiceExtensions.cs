using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Polly;
using Elections.BLL;
using Elections.BLL.Contracts;
using Elections.BLL.Models;
using Elections.DAL.MySql;
using Elections.DAL.MySql.Contract;
using System;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class WebServiceExtensions
    {
        public static IServiceCollection AddWebServices(
            this IServiceCollection services,
            IConfigurationSection BLLOptionsSection,
            IConfigurationSection DALOptionSection)
        {
            if (BLLOptionsSection == null)
            {
                throw new ArgumentNullException(nameof(BLLOptionsSection));
            }

            if (DALOptionSection == null)
            {
                throw new ArgumentNullException(nameof(DALOptionSection));
            }

            var bllSettings = BLLOptionsSection.Get<CarsBLLOptions>();

            services.Configure<CarsBLLOptions>(BLLOptionsSection);            
            services.Configure<MySqlRepositoryOption>(DALOptionSection);            

            services.TryAddSingleton<ICarsRepository, CarsRepository>();
            services.TryAddSingleton<IPartiesRepository, PartiesRepository>();

            services.TryAddScoped<ICarsService, CarsService>();
            services.TryAddScoped<IPartiesService, PartiesService>();
            services.TryAddScoped<IJwtTokenService, JwtTokenService>();

            services.AddHttpClient();
            //services.AddHttpClient<TodosMockProxyService>(c =>
            //{
            //    c.BaseAddress = new Uri(bllSettings.WebApiUrl);
            //}).AddTransientHttpErrorPolicy(p =>
            //    p.WaitAndRetryAsync(3, _ => TimeSpan.FromMilliseconds(600))
            //);

            return services;
        }
    }
}
