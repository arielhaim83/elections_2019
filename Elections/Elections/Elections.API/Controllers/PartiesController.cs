using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Elections.API.Models;
using Elections.API.Swagger;
using Elections.BLL.Contracts;
using Swashbuckle.AspNetCore.Annotations;
using Swashbuckle.AspNetCore.Filters;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Elections.API.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/v{version:apiVersion}/parties")]
    [ApiVersion("1.0")]
    [ApiController]
    public class PartiesController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IPartiesService _partiesService;

        /// <summary>
        /// Cars db api
        /// </summary>
        /// <param name="mapper"></param>
        /// <param name="partiesService"></param>
        public PartiesController(IMapper mapper, IPartiesService partiesService)
        {
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _partiesService = partiesService ?? throw new ArgumentNullException(nameof(partiesService));
        }                       

        /// <summary>
        /// Get cars list
        /// </summary>       
        /// <returns></returns>
        [HttpGet("")]
        [SwaggerResponse((int)HttpStatusCode.OK, Type = typeof(IEnumerable<Car>), Description = "Returns finded cars array")]
        [SwaggerResponse((int)HttpStatusCode.BadRequest, Description = "Missing or invalid pageNumber or pageSize")]
        [SwaggerResponse((int)HttpStatusCode.InternalServerError, Description = "Unexpected error")]
        public async Task<IActionResult> GetPartiesListAsync()
        {          
            var result = await _partiesService.GetPartiesListAsync();
            return Ok(_mapper.Map<IEnumerable<Party>>(result));
        }
    }
}
