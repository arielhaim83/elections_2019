using AutoMapper;
using Elections.BLL.Mappings;

namespace Elections.BLL.Tests.Helpers
{
    public static class Mapper
    {
        public static IMapper GetAutoMapper()
        {
            var mockMapper = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new CarsMapping());

            });
            var mapper = mockMapper.CreateMapper();
            return mapper;
        }
    }
}
