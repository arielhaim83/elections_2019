using Elections.BLL.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Elections.BLL.Contracts
{
    public interface IPartiesService
    {         
        /// <summary>
        /// Get cars list 
        /// </summary>       
        /// <returns></returns>
        Task<IEnumerable<Party>> GetPartiesListAsync();
    }
}
