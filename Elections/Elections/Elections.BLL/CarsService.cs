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
    public class CarsService : ICarsService
    {
        private readonly IMapper _mapper;

        public ICarsRepository _carsRepo { get; }

        public CarsService(IMapper mapper, ICarsRepository carsRepo)
        {
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _carsRepo = carsRepo ?? throw new ArgumentNullException(nameof(carsRepo));
        }

        public async Task<Car> CreateCarAsync(Car car)
        {
            var newCar = await _carsRepo.CreateCarAsync(_mapper.Map<CarEntity>(car));
            return _mapper.Map<Car>(newCar);
        }

        public async Task<bool> DeleteCarAsync(Guid id)
        {
            var result = await _carsRepo.DeleteCarAsync(id);
            return result;
        }

        public async Task<Car> GetCarAsync(Guid id)
        {
            var car = await _carsRepo.GetCarAsync(id);
            return _mapper.Map<Car>(car);
        }

        public async Task<IEnumerable<Car>> GetCarsListAsync(int pageNumber, int pageSize)
        {
            var cars = await _carsRepo.GetCarsListAsync(pageNumber, pageSize);
            return _mapper.Map<IEnumerable<Car>>(cars);
        }

        public async Task<bool> UpdateCarAsync(Car car)
        {
            var result = await _carsRepo.UpdateCarAsync(_mapper.Map<CarEntity>(car));
            return result;
        }
    }
}
