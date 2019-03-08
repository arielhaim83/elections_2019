using Dapper;
using Microsoft.Extensions.Options;
using MySql.Data.MySqlClient;
using Elections.DAL.MySql.Contract;
using Elections.DAL.MySql.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace Elections.DAL.MySql
{
    public class PartiesRepository : IPartiesRepository
    {

        private readonly IOptionsMonitor<MySqlRepositoryOption> _options;

        public PartiesRepository(IOptionsMonitor<MySqlRepositoryOption> options)
        {
            _options = options;
        }
          
        public async Task<IEnumerable<PartyEntity>> GetPartiesListAsync()
        {
            using (var db = new MySqlConnection(_options.CurrentValue.PartiesDbConnectionString))
            {                
                const string sqlQuery = @"SELECT 
                    id,
                    name,                    
                    created_timestamp                    
                FROM cars";
                return await db.QueryAsync<PartyEntity>(sqlQuery, commandType: CommandType.Text);
            }
        }
    }
}
