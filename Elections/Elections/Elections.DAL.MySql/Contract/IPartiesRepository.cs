using Elections.DAL.MySql.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Elections.DAL.MySql.Contract
{
    public interface IPartiesRepository
    {       
        Task<IEnumerable<PartyEntity>> GetPartiesListAsync();
    }
}
