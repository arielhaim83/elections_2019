using AutoMapper;
using Elections.BLL.Contracts;
using Elections.BLL.Models;
using Elections.DAL.MySql.Contract;
using Elections.DAL.MySql.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Elections.BLL
{
    public class PartiesService : IPartiesService
    {
        private readonly IMapper _mapper;

        public IPartiesRepository _partiesRepo { get; }

        public PartiesService(IMapper mapper, IPartiesRepository partiesRepo)
        {
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _partiesRepo = partiesRepo ?? throw new ArgumentNullException(nameof(partiesRepo));
        }

        public async Task<IEnumerable<Party>> GetPartiesListAsync()
        {
            var parties = await _partiesRepo.GetPartiesListAsync();
            return _mapper.Map<IEnumerable<Party>>(parties);
        }

      
    }
}
